import CaseSudokuSuperposition from '../model/CaseSudokuSuperposition'
import GrilleSudokuSuperposition from '../model/GrilleSudokuSuperposition'
import CarreRule from './CarreRule'
import ColonneRule from './ColonneRule'
import LigneRule from './LigneRule'

export default class GrilleRule {
  constructor(
    private ligneRule: LigneRule,
    private colonneRule: ColonneRule,
    private carreRule: CarreRule
  ) {}
  apply(grille: GrilleSudokuSuperposition): GrilleSudokuSuperposition {
    // Appliquer la règle sur les lignes
    const lignes = getLines(grille)
    const nouvellesLignes = lignes.map((ligne) =>
      this.ligneRule.applyLigne(ligne)
    )
    const lignedGrille = new GrilleSudokuSuperposition()
    lignedGrille.cases = nouvellesLignes
    // Appliquer la règle sur les colonnes
    const colonnes = getColumns(lignedGrille)
    const nouvellesColonnes = colonnes.map((colonne) =>
      this.ligneRule.applyLigne(colonne)
    )
    const colonnedGrille = new GrilleSudokuSuperposition()
    colonnedGrille.cases = nouvellesColonnes
    // Appliquer la règle sur les carrés
    const carres: CaseSudokuSuperposition[][][] = []
    carres.push(getSousGrille(colonnedGrille.cases, 0, 0))
    carres.push(getSousGrille(colonnedGrille.cases, 3, 0))
    carres.push(getSousGrille(colonnedGrille.cases, 6, 0))
    carres.push(getSousGrille(colonnedGrille.cases, 0, 3))
    carres.push(getSousGrille(colonnedGrille.cases, 3, 3))
    carres.push(getSousGrille(colonnedGrille.cases, 6, 3))
    carres.push(getSousGrille(colonnedGrille.cases, 0, 6))
    carres.push(getSousGrille(colonnedGrille.cases, 3, 6))
    carres.push(getSousGrille(colonnedGrille.cases, 6, 6))
    const nouveauxCarres = carres.map((carre) =>
      this.carreRule.applyCarre(carre)
    )
    const nouvelleGrille = new GrilleSudokuSuperposition()
    nouvelleGrille.cases = reconstruireSudoku(nouveauxCarres)

    // Retourner la nouvelle grille
    return nouvelleGrille
  }
}

function getColumns(grille: GrilleSudokuSuperposition) {
  return grille.cases[0].map((_, i) => grille.cases.map((row) => row[i]))
}

function getLines(grille: GrilleSudokuSuperposition) {
  return grille.cases.map((lignes) => lignes.slice())
}

function getSousGrille(
  grille: CaseSudokuSuperposition[][],
  ligne: number,
  colonne: number
): CaseSudokuSuperposition[][] {
  const sousGrille = []
  for (let i = ligne; i < ligne + 3; i++) {
    const sousLigne = grille[i].slice(colonne, colonne + 3)
    sousGrille.push(sousLigne)
  }
  return sousGrille
}
function reconstruireSudoku(
  carres: CaseSudokuSuperposition[][][]
): CaseSudokuSuperposition[][] {
  const grille: CaseSudokuSuperposition[][] = Array(9)
    .fill(null)
    .map(() => Array(9).fill(null))

  carres.forEach((carre, index) => {
    const offsetX = Math.floor(index % 3) * 3
    const offsetY = Math.floor(index / 3) * 3

    carre.forEach((row, i) => {
      row.forEach((cell, j) => {
        grille[offsetY + i][offsetX + j] = cell
      })
    })
  })

  return grille
}

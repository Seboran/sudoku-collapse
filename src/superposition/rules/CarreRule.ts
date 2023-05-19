import CaseSudokuSuperposition from '../model/CaseSudokuSuperposition'
import AbstractRule from './AbstractRule'

export default class CarreRule extends AbstractRule {
  applyCarre(
    carre: Array<Array<CaseSudokuSuperposition>>
  ): Array<Array<CaseSudokuSuperposition>> {
    const ligne = carreToLigne(carre)
    // Copier l'argument d'entrée
    const copyLigne = this.apply(ligne)

    const nouveauCarre = ligneToCarre(copyLigne)
    return nouveauCarre
  }
}

export function ligneToCarre(
  ligne: CaseSudokuSuperposition[]
): CaseSudokuSuperposition[][] {
  return [
    [ligne[0], ligne[1], ligne[2]],
    [ligne[3], ligne[4], ligne[5]],
    [ligne[6], ligne[7], ligne[8]],
  ]
}

export function carreToLigne(
  carre: CaseSudokuSuperposition[][]
): CaseSudokuSuperposition[] {
  return [...carre[0], ...carre[1], ...carre[2]]
}

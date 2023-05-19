import ValeurSudoku from '../../grille/model/ValeurSudoku'
import CaseSudokuSuperposition from '../model/CaseSudokuSuperposition'

export default abstract class AbstractRule {
  protected propagateCollapse(
    valeursEffondrees: Set<ValeurSudoku>,
    ligne: CaseSudokuSuperposition[]
  ) {
    valeursEffondrees.forEach((valeurEffondree) =>
      ligne
        .filter((caseSudoku) => caseSudoku.valeurs.size > 1)
        .forEach((caseSudoku) => caseSudoku.valeurs.delete(valeurEffondree))
    )
  }

  protected getCollapsedValues(
    casesEffondrees: CaseSudokuSuperposition[]
  ): Set<ValeurSudoku> {
    return new Set(
      casesEffondrees.map(
        (caseSudoku) => caseSudoku.valeurs.values().next().value
      )
    )
  }

  protected getCollapsedCells(
    ligne: CaseSudokuSuperposition[]
  ): CaseSudokuSuperposition[] {
    return ligne.filter((caseSudoku) => caseSudoku.valeurs.size === 1)
  }

  protected apply(ligne: CaseSudokuSuperposition[]): CaseSudokuSuperposition[] {
    const copyLigne = ligne.map(
      (caseSudoku) => new CaseSudokuSuperposition(caseSudoku)
    )
    // Récupérer la liste des cases qui n'ont qu'un seule seule valeur possible
    const casesEffondrees = this.getCollapsedCells(copyLigne)
    // Récupérer la liste de ces valeurs
    const valeursEffondrees = this.getCollapsedValues(casesEffondrees)
    // Retirer ces valeurs des autres cases.
    this.propagateCollapse(valeursEffondrees, copyLigne)
    return copyLigne
  }
}

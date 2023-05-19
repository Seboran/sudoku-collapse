import CaseSudokuSuperposition from '../model/CaseSudokuSuperposition'
import AbstractRule from './AbstractRule'

export default class ColonneRule extends AbstractRule {
  applyColonne(
    colonne: Array<Array<CaseSudokuSuperposition>>
  ): Array<Array<CaseSudokuSuperposition>> {
    return ligneToColonne(this.apply(colonneToLigne(colonne)))
  }
}

export function ligneToColonne(
  ligne: CaseSudokuSuperposition[]
): CaseSudokuSuperposition[][] {
  return ligne.map((cell) => [cell])
}

export function colonneToLigne(
  colonne: CaseSudokuSuperposition[][]
): CaseSudokuSuperposition[] {
  return colonne.flatMap((cell) => cell)
}

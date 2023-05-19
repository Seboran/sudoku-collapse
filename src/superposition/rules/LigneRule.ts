import CaseSudokuSuperposition from '../model/CaseSudokuSuperposition'
import AbstractRule from './AbstractRule'

export default class LigneRule extends AbstractRule {
  applyLigne(
    ligne: Array<CaseSudokuSuperposition>
  ): Array<CaseSudokuSuperposition> {
    // Copier l'argument d'entrée
    const copyLigne = this.apply(ligne)

    return copyLigne
  }
}

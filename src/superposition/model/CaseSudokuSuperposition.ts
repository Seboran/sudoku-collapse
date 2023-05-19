import ValeurSudoku from '../../grille/model/ValeurSudoku'

export default class CaseSudokuSuperposition {
  public valeurs: Set<ValeurSudoku> = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

  constructor(valeurs: CaseSudokuSuperposition | undefined = undefined) {
    if (valeurs instanceof CaseSudokuSuperposition) {
      // Deep copy
      this.valeurs = new Set([...valeurs.valeurs])
      return
    }
    if (valeurs === undefined) {
      // Do nothing
      return
    }
  }
}

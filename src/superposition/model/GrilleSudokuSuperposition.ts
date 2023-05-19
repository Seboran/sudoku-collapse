import { createEmptyGrille } from '../../utils/createEmptyGrille'
import CaseSudokuSuperposition from './CaseSudokuSuperposition'

export default class GrilleSudokuSuperposition {
  public cases: CaseSudokuSuperposition[][] = createEmptyGrille(
    CaseSudokuSuperposition
  )
}

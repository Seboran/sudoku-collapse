import CaseSudoku from './CaseSudoku'

export default class GrilleSudoku {
  cases: CaseSudoku[][] = Array(9)
    .fill(0)
    .map(() => Array(9).fill(null))
}

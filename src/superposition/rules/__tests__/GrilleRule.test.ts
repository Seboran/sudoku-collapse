import { describe, expect, test } from 'vitest'
import GrilleSudokuSuperposition from '../../model/GrilleSudokuSuperposition'
import GrilleRule from '../GrilleRule'
import LigneRule from '../LigneRule'
import ColonneRule from '../ColonneRule'
import CarreRule from '../CarreRule'

describe('Grille règles', () => {
  test("Changement d'état de une case", () => {
    const grilleSudoku = new GrilleSudokuSuperposition()
    grilleSudoku.cases[0][0].valeurs = new Set([1])

    const rule = new GrilleRule(
      new LigneRule(),
      new ColonneRule(),
      new CarreRule()
    )

    const nouvelleGrilleSudoku = rule.apply(grilleSudoku)

    expect(nouvelleGrilleSudoku.cases[0][1].valeurs).not.include(1)
    expect(nouvelleGrilleSudoku.cases[1][0].valeurs).not.include(1)
    expect(nouvelleGrilleSudoku.cases[1][1].valeurs).not.include(1)
  })
})

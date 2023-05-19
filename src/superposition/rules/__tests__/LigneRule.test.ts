import { describe, test, expect } from 'vitest'
import LigneRule from '../LigneRule'
import CaseSudokuSuperposition from '../../model/CaseSudokuSuperposition'
import ValeurSudoku from '../../../grille/model/ValeurSudoku'

describe('Ligne rule', () => {
  test('Applique sur une ligne', () => {
    const rule = new LigneRule()

    const ligne: CaseSudokuSuperposition[] = initLigne()

    ligne[0].valeurs = new Set<ValeurSudoku>([1])

    const nouvelleLigne = rule.applyLigne(ligne)

    nouvelleLigne
      .splice(1)
      .forEach((caseSudoku) => expect(caseSudoku.valeurs).not.include(1))
  })

  test('effondre toutes les cases', () => {
    const rule = new LigneRule()
    const ligne = initLigne()
    ligne[0].valeurs = new Set([1])
    ligne[1].valeurs = new Set([2])
    ligne[2].valeurs = new Set([3])
    ligne[3].valeurs = new Set([4])
    ligne[4].valeurs = new Set([5])
    ligne[5].valeurs = new Set([6])
    ligne[6].valeurs = new Set([7])
    ligne[7].valeurs = new Set([8])

    const nouvelleLigne = rule.applyLigne(ligne)
    expect(nouvelleLigne[8].valeurs).toEqual(new Set([9]))
  })
})

function initLigne(): CaseSudokuSuperposition[] {
  return Array(9)
    .fill(0)
    .map(() => new CaseSudokuSuperposition())
}

import { describe, expect, test } from 'vitest'
import ValeurSudoku from '../../../grille/model/ValeurSudoku'
import CaseSudokuSuperposition from '../../model/CaseSudokuSuperposition'
import CarreRule from '../CarreRule'

describe('Carré rule', () => {
  test('Applique sur un carré', () => {
    const rule = new CarreRule()

    const ligne: CaseSudokuSuperposition[] = initLigne()

    ligne[0].valeurs = new Set<ValeurSudoku>([1])

    const carre = [
      [ligne[0], ligne[1], ligne[2]],
      [ligne[3], ligne[4], ligne[5]],
      [ligne[6], ligne[7], ligne[8]],
    ]

    const nouveauCarre = rule.applyCarre(carre)

    expect(nouveauCarre[0][1].valeurs).not.include(1)
    expect(nouveauCarre[0][2].valeurs).not.include(1)
    expect(nouveauCarre[1][0].valeurs).not.include(1)
    expect(nouveauCarre[1][1].valeurs).not.include(1)
    expect(nouveauCarre[1][2].valeurs).not.include(1)
    expect(nouveauCarre[2][0].valeurs).not.include(1)
    expect(nouveauCarre[2][1].valeurs).not.include(1)
    expect(nouveauCarre[2][2].valeurs).not.include(1)
  })

  test('effondre toutes les cases', () => {
    const rule = new CarreRule()
    const ligne = initLigne()
    ligne[0].valeurs = new Set([1])
    ligne[1].valeurs = new Set([2])
    ligne[2].valeurs = new Set([3])
    ligne[3].valeurs = new Set([4])
    ligne[4].valeurs = new Set([5])
    ligne[5].valeurs = new Set([6])
    ligne[6].valeurs = new Set([7])
    ligne[7].valeurs = new Set([8])

    const carre = [
      [ligne[0], ligne[1], ligne[2]],
      [ligne[3], ligne[4], ligne[5]],
      [ligne[6], ligne[7], ligne[8]],
    ]
    const nouveauCarre = rule.applyCarre(carre)
    expect(nouveauCarre[2][2].valeurs).toEqual(new Set([9]))
  })
})

function initLigne(): CaseSudokuSuperposition[] {
  return Array(9)
    .fill(0)
    .map(() => new CaseSudokuSuperposition())
}

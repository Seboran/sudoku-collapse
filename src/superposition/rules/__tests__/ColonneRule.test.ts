import { describe, expect, test } from 'vitest'
import ValeurSudoku from '../../../grille/model/ValeurSudoku'
import CaseSudokuSuperposition from '../../model/CaseSudokuSuperposition'
import ColonneRule from '../ColonneRule'

describe('Colonne rule', () => {
  test('Applique sur une colonne', () => {
    const rule = new ColonneRule()

    const ligne: CaseSudokuSuperposition[] = initLigne()

    ligne[0].valeurs = new Set<ValeurSudoku>([1])

    const carre = ligne.map((elt) => [elt])

    const nouveauCarre = rule.applyColonne(carre)

    nouveauCarre
      .splice(1)
      .forEach(([caseSudoku]) => expect(caseSudoku.valeurs).not.include(1))
  })

  test('effondre toutes les cases', () => {
    const rule = new ColonneRule()
    const ligne = initLigne()
    ligne[0].valeurs = new Set([1])
    ligne[1].valeurs = new Set([2])
    ligne[2].valeurs = new Set([3])
    ligne[3].valeurs = new Set([4])
    ligne[4].valeurs = new Set([5])
    ligne[5].valeurs = new Set([6])
    ligne[6].valeurs = new Set([7])
    ligne[7].valeurs = new Set([8])

    const carre = ligne.map((elt) => [elt])

    const nouveauCarre = rule.applyColonne(carre)
    expect(nouveauCarre[8][0].valeurs).toEqual(new Set([9]))
  })
})

function initLigne(): CaseSudokuSuperposition[] {
  return Array(9)
    .fill(0)
    .map(() => new CaseSudokuSuperposition())
}

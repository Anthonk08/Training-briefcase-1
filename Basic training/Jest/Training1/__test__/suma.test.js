//Jest es un framework de pruebas para javascript enfocado en la simplicidad
import { expect, it, test } from '@jest/globals';
import { sum } from '../src/suma.js';

//describe es como una seccion donde vamos a ejecutar varios test
describe('Pruebas para suma', () => {
    //test es el metodo que se encargara de ejecutar la prueba
    test('8 + 2 is 10', () => {
        expect(sum(8, 2)).toBe(10)
    })

    //it es alias de test
    it('Should return 10 with 8 + 2', () => {
        expect(sum(2, 8)).toBe(10)
    })

    test('1 + (-2) = -1', () => {
        expect(sum(1, -2)).toBe(-1)
    })

    test('-1 + (-2) = -1', () => {
        expect(sum(-1, -2)).toBe(-3)
    })
})

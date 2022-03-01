import { carsList, brandsList } from '../src/arrays.js';

describe('Verificando las marcas existentes', () => {
    test('Que el arreglo no sea Null', () => {
        expect(brandsList()).not.toBeNull()
    })
})

describe('Verificar los autos existentes', () => {
    test('Que el arreglo no sea null', () => {
        expect(carsList()).not.toBeNull()
    })

    test('Verificar si contiene VWGold', () => {
        expect(carsList()).toContain('VW Golf GTI');
    })

    test('Comprobar la longitud o tamaño del arreglo', () => {
        expect(carsList()).toHaveLength(5)
    })
})
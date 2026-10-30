import { validarTelefono } from "../src/validar.js";
//Tests para comprobar que el teléfono ingresado sea válido(se verifica que sea solo numeros, que no esté vacio y que no contenga letras)
describe('validarTelefono',() =>{
    test('Rechaza un número de teléfono que tiene una leta', ()=>{
        expect(validarTelefono('1234A')).toBe(false);
    });
    test('Rechaza un número de teléfono si está vacio', ()=>{
        expect(validarTelefono('')).toBe(false);
    });
    test('Acepta un número de teléfono que tenga solo números',()=>{
        expect(validarTelefono('123452132')).toBe(true);
    });
});
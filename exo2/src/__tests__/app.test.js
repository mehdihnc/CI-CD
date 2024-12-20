const { add, multiply, divide } = require('../app');

describe('Opérations mathématiques', () => {
    describe('Addition', () => {
        test('additionne deux nombres positifs', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('gère les nombres négatifs', () => {
            expect(add(-1, 1)).toBe(0);
            expect(add(-1, -1)).toBe(-2);
        });

        test('rejette les paramètres non numériques', () => {
            expect(() => add('2', 3)).toThrow('Les paramètres doivent être des nombres');
            expect(() => add(null, 3)).toThrow('Les paramètres doivent être des nombres');
            expect(() => add(2, undefined)).toThrow('Les paramètres doivent être des nombres');
        });
    });

    describe('Multiplication', () => {
        test('multiplie deux nombres positifs', () => {
            expect(multiply(2, 3)).toBe(6);
        });

        test('gère les nombres négatifs', () => {
            expect(multiply(-2, 3)).toBe(-6);
            expect(multiply(-2, -3)).toBe(6);
        });

        test('rejette les paramètres non numériques', () => {
            expect(() => multiply('2', 3)).toThrow('Les paramètres doivent être des nombres');
            expect(() => multiply([], 3)).toThrow('Les paramètres doivent être des nombres');
            expect(() => multiply(2, {})).toThrow('Les paramètres doivent être des nombres');
        });
    });

    describe('Division', () => {
        test('divise deux nombres positifs', () => {
            expect(divide(6, 2)).toBe(3);
        });

        test('gère les nombres négatifs', () => {
            expect(divide(-6, 2)).toBe(-3);
            expect(divide(-6, -2)).toBe(3);
        });

        test('lance une erreur pour division par zéro', () => {
            expect(() => divide(6, 0)).toThrow('Division par zéro impossible');
        });

        test('rejette les paramètres non numériques', () => {
            expect(() => divide('6', 2)).toThrow('Les paramètres doivent être des nombres');
            expect(() => divide(6, '2')).toThrow('Les paramètres doivent être des nombres');
            expect(() => divide(null, 2)).toThrow('Les paramètres doivent être des nombres');
        });
    });
});

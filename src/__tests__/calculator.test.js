const { sum, subtract } = require('../calculator');

describe('Calculator', () => {
    test('additionne correctement deux nombres', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });

    test('soustrait correctement deux nombres', () => {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });
}); 
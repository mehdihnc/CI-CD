function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return a + b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    if (b === 0) {
        throw new Error('Division par zéro impossible');
    }
    return a / b;
}

module.exports = {
    add,
    multiply,
    divide
};

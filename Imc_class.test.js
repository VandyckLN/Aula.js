const Pessoa = require('./Imc_class');

test('Calculates IMC for pessoa3 correctly', () => {
    const pessoa3 = new Pessoa('Maria', 65, 1.55, 71);
    const imc = pessoa3.calcularIMC();
    expect(imc).toBeCloseTo(27.06, 2);
});
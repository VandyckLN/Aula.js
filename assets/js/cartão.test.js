const { validarCartao } = require('../assets/src/cartão');

test('Valid Visa card', () => {
    expect(validarCartao('4111111111111111', 'Visa')).toBe(true);
});

test('Invalid Visa card', () => {
    expect(validarCartao('5111111111111111', 'Visa')).toBe(false);
});

test('Valid Master card', () => {
    expect(validarCartao('5111111111111111', 'Master')).toBe(true);
    expect(validarCartao('2221000000000009', 'Master')).toBe(true);
});

test('Invalid Master card', () => {
    expect(validarCartao('4111111111111111', 'Master')).toBe(false);
});

test('Valid Amex card', () => {
    expect(validarCartao('341111111111111', 'Amex')).toBe(true);
    expect(validarCartao('371111111111111', 'Amex')).toBe(true);
});

test('Invalid Amex card', () => {
    expect(validarCartao('3411111111111111', 'Amex')).toBe(false);
});

test('Valid Elo card', () => {
    expect(validarCartao('5066991111111118', 'Elo')).toBe(true);
    expect(validarCartao('5066991111111111118', 'Elo')).toBe(true);
});

test('Invalid Elo card', () => {
    expect(validarCartao('4111111111111111', 'Elo')).toBe(false);
});

test('Valid Hipercard card', () => {
    expect(validarCartao('6062825624254001', 'Hipercard')).toBe(true);
});

test('Invalid Hipercard card', () => {
    expect(validarCartao('4111111111111111', 'Hipercard')).toBe(false);
});

test('Valid Outros card', () => {
    expect(validarCartao('1234567890123456', 'Outros')).toBe(true);
});

test('Invalid card with unknown bandeira', () => {
    expect(validarCartao('4111111111111111', 'Unknown')).toBe(false);
});
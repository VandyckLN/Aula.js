const { validarCartao } = require('./cartão');

test('Valid Visa card', () => {
    expect(validarCartao('4111111111111111', 'Visa')).toBe(true);
    expect(validarCartao('4111111111111', 'Visa')).toBe(false); // 13 dígitos
});

test('Invalid Visa card', () => {
    expect(validarCartao('5111111111111111', 'Visa')).toBe(false);
});

test('Valid Master card', () => {
    expect(validarCartao('5111111111111111', 'Master')).toBe(true);
    expect(validarCartao('2221000000000009', 'Master')).toBe(true);
    expect(validarCartao('5211111111111111', 'Master')).toBe(true);
    expect(validarCartao('5311111111111111', 'Master')).toBe(true);
    expect(validarCartao('5411111111111111', 'Master')).toBe(true);
    expect(validarCartao('5511111111111111', 'Master')).toBe(true);
});

test('Invalid Master card', () => {
    expect(validarCartao('4111111111111111', 'Master')).toBe(false);
});

test('Valid American Express card', () => {
    expect(validarCartao('341111111111111', 'AmericanExpress')).toBe(true);
    expect(validarCartao('371111111111111', 'AmericanExpress')).toBe(true);
});

test('Invalid American Express card', () => {
    expect(validarCartao('3411111111111111', 'AmericanExpress')).toBe(false);
});

test('Valid Elo card', () => {
    expect(validarCartao('4011111111111', 'Elo')).toBe(true);
    expect(validarCartao('4312111111111', 'Elo')).toBe(true);
    expect(validarCartao('4389111111111', 'Elo')).toBe(true);
    expect(validarCartao('4514161111111', 'Elo')).toBe(true);
    expect(validarCartao('6362971111111', 'Elo')).toBe(true);
    expect(validarCartao('5066991111111', 'Elo')).toBe(true);
    expect(validarCartao('5067111111111', 'Elo')).toBe(true);
    expect(validarCartao('5090111111111', 'Elo')).toBe(true);
    expect(validarCartao('4576111111111', 'Elo')).toBe(true);
});

test('Invalid Elo card', () => {
    expect(validarCartao('4111111111111111', 'Elo')).toBe(false);
});

test('Valid Hipercard card', () => {
    expect(validarCartao('6062111111111111', 'Hipercard')).toBe(true);
    expect(validarCartao('6900111111111111', 'Hipercard')).toBe(true);
});

test('Invalid Hipercard card', () => {
    expect(validarCartao('4111111111111111', 'Hipercard')).toBe(false);
});

test('Valid Discover card', () => {
    expect(validarCartao('6011111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6511111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6441111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6451111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6461111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6471111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6481111111111111', 'Discover')).toBe(true);
    expect(validarCartao('6491111111111111', 'Discover')).toBe(true);
});

test('Invalid Discover card', () => {
    expect(validarCartao('4111111111111111', 'Discover')).toBe(false);
});

test('Valid Outros card', () => {
    expect(validarCartao('1234567890123456', 'Outros')).toBe(true);
});

test('Invalid card with unknown bandeira', () => {
    expect(validarCartao('4111111111111111', 'Unknown')).toBe(false);
});
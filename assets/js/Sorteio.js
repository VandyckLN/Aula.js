const ultimosNumeros = [
    [12, 15, 23, 32, 33, 46],
    [4, 5, 10, 34, 58, 59],
    [21, 24, 33, 41, 48, 56]
];

function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

function gerarSorteioComMedia() {
    const media = ultimosNumeros.map(calcularMedia).map(Math.round);
    const numerosSorteados = [];
    while (numerosSorteados.length < 20) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numerosSorteados.includes(numero) && media.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    return numerosSorteados;
}

console.log(gerarSorteioComMedia());

function gerarSorteio() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 20) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }
    return numerosSorteados;
}

console.log(gerarSorteio());
console.log('Sorteio gerado com sucesso!');
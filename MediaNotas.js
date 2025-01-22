import readline from 'readline-sync';

function obterNotas() {
    const notas = [];
    notas.push(parseFloat(readline.question("Digite a primeira nota: ")));
    notas.push(parseFloat(readline.question("Digite a segunda nota: ")));
    notas.push(parseFloat(readline.question("Digite a terceira nota: ")));
    return notas;
}

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function avaliarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media < 5) {
        return "Reprovado";
    } else {
        return "Recuperação";
    }
}

function main() {
    const notas = obterNotas();
    const media = calcularMedia(notas);
    const resultado = avaliarMedia(media);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Resultado: ${resultado}`);
}

main();

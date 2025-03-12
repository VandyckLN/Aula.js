

const entradas = [5, 50, 10, 98, 23]; // Vetor que simula as entradas de dados
let i = 0;

function gets() { // Função que simula a entrada de dados
    const valor = entradas[i];// Atribui o valor da posição i do vetor de entradas à variável valor
    i++; // Incrementa o índice do vetor de entradas
    return valor; // Retorna o valor da posição i do vetor de entradas
}

function print(texto) {      // Função que simula a saída de dados
    console.log(texto);     // Imprime o texto passado como parâmetro
}

module.exports = { gets, print };     // Exporta as funções gets e print para serem utilizadas em outros módulos
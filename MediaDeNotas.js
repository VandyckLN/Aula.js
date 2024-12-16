const nome = 'mathias';


const notas = [];
notas.push(3);
notas.push(5);
notas.push(6);

const trabalhos = [];
trabalhos.push(0.9);
trabalhos.push(0.5);

let soma = 0;


for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    const trabalho = trabalhos[i] || 0; // se não tiver trabalho, ele vai ser 0
    soma = soma + nota + trabalho;
}
const maiorNota = Math.max(...notas); // Math.max pega o maior número de um array
const somaTrabalhos = trabalhos.reduce((acc, curr) => acc + curr, 0); // soma dos trabalhos
const mediaFinal = maiorNota + somaTrabalhos;
console.log(`A média do aluno ${nome} é ${mediaFinal.toFixed(2)}`); // mostra apenas 2 números decimais na média

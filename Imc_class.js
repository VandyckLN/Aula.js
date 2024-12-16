
class Pessoa {
    constructor(nome, peso, altura, idade) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;

    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

const pessoa = new Pessoa('Caio', 80, 1.80, 32);
pessoa.imc = pessoa.calcularIMC();
const pessoa2 = new Pessoa('Mariana', 72, 1.73, 26);
const pessoa3 = new Pessoa('Maria', 65, 1.55, 71);
pessoa2.imc = pessoa2.calcularIMC();
pessoa3.imc = pessoa3.calcularIMC();
if (pessoa.imc < 18.5) {
    console.log('Abaixo do peso');
} else if (pessoa.imc >= 18.5 && pessoa.imc <= 24.9) {
    console.log('Peso normal');
} else if (pessoa.imc >= 25 && pessoa.imc <= 29.9) {
    console.log('Sobrepeso');
} else if (pessoa.imc >= 30 && pessoa.imc <= 34.9) {
    console.log('Obesidade grau 1');
}
else if (pessoa.imc >= 35 && pessoa.imc <= 39.9) {
    console.log('Obesidade grau 2');
} else if (pessoa.imc >= 40) {
    console.log('Obesidade grau 3');
}

console.log(`${pessoa.nome}: ${pessoa.imc.toFixed(2)}`);
console.log(`${pessoa2.nome}: ${pessoa2.imc.toFixed(2)}`);
console.log(`${pessoa3.nome}: ${pessoa3.imc.toFixed(2)}`);
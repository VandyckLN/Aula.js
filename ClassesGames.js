class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
        if (this.tipo === 'guerreiro') {
            ataque = 'Ataque com espada';
        } else if (this.tipo === 'mago') {
            ataque = 'Ataque com magia';
        } else if (this.tipo === 'arqueiro') {
            ataque = 'Ataque A Distancia';
        } else if (this.tipo === 'assassino') {
            ataque = 'Ataque Furtivo';
        }
        return ataque;
    }
}

let char = new Heroi('Tyson', 25, 'guerreiro');
let mago = new Heroi('Gandalf', 100, 'mago');
let arqueiro = new Heroi('Legolas', 2931, 'arqueiro');
let assassino = new Heroi('Ezio', 35, 'assassino');

console.log(`O ${char.nome} atacou usando ${char.atacar()}!`);
console.log(`O ${mago.nome} atacou usando ${mago.atacar()}!`);
console.log(`O ${arqueiro.nome} atacou usando ${arqueiro.atacar()}!`);
console.log(`O ${assassino.nome} atacou usando ${assassino.atacar()} !`);

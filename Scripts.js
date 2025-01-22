const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomePessoa = "João";
let idadePessoa = 25;
let raçaPessoa = "Branco";
let sexoPessoa = "Masculino";
let cidade = "São Paulo";
let estado = "SP";
let pais = "Brasil";
function perguntaNome() {
    readline.question("Qual é o seu nome? ", function(nome) {
        nomePessoa = nome;
        perguntaIdade(); if (nomePessoa == "João") {
            console.log("Olá, João! Seja bem-vindo ao sistema!");
        } else {
            console.log("Olá, " + nomePessoa + "! Seja bem-vindo ao sistema!");
        }
    });
}


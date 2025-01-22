let Ansiedade = ["Agitação", "Nervosismo", "Inquietação"];
let Depressão = ["Tristeza", "Desânimo", "Desesperança"];
let Estresse = ["Irritabilidade", "Cansaço", "Dificuldade de concentração"];
let Síndrome_do_pânico = ["Medo", "Desespero", "Descontrole"];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Qual é o seu sintoma? ", (sintomas) => {
    let idade = require('readline-sync').question("Qual é a sua idade?"); 

    if ((sintomas.includes("Agitação") || sintomas.includes("Nervosismo") || sintomas.includes("Inquietação")) && idade >= 18) {
        console.log("Você está com ansiedade");
    } else if ((sintomas.includes("Tristeza") || sintomas.includes("Desânimo") || sintomas.includes("Desesperança")) && idade >= 18) {
        console.log("Você está com depressão");
    } else if ((sintomas.includes("Irritabilidade") || sintomas.includes("Cansaço") || sintomas.includes("Dificuldade de concentração")) && idade >= 18) {
        console.log("Você está com estresse");
    } else if ((sintomas.includes("Medo") || sintomas.includes("Desespero") || sintomas.includes("Descontrole")) && idade >= 18) {
        console.log("Você está com síndrome do pânico");
    } else {
        console.log("Você precisa de mais exames para saber o que você tem");
    }
    readline.close();
});
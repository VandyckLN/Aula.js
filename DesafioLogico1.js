let Heroi ;
let XP;
let nivel = "Ferro" || "Bronze" || "Prata" || "Ouro" || "Platina" || "Ascendente" || "Imortal" || "Radiante";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Qual é o nome do seu herói? ", (Heroi) => {
    readline.question("Qual é a quantidade de XP do seu herói? ", (xp) => {
        xp = parseInt(xp);
        if (xp < 1000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Ferro`);
        } else if (xp >= 1000 && xp < 2000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Bronze`);
        } else if (xp >= 2000 && xp < 5000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de  Prata`);
        } else if (xp >= 5000 && xp < 7000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Ouro`);
        } else if (xp >= 7000 && xp < 8000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Platina`);
        } else if (xp >= 8000 && xp < 9000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de  Ascendente`);
        } else if (xp >= 9000 && xp < 100000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Imortal`);
        } else if (xp >= 100000) {
            console.log(`O Heroí de nome ${Heroi} está no nivel de Radiante`);
        }
        readline.close();
    });
});
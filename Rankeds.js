function MediadeVictorias(victory, defeat, draw) {
    let total = victory + defeat + draw
    let media = victory/total*100
   
    if (media < 10) {
        console.log("Ferro")
    }
    else if (media >= 11 && media <= 20) {
        console.log("Bronze")
    }
    else if (media >= 21 && media <= 50) {
        console.log("Prata")
    }
    else if (media >= 51 && media <= 80) {
        console.log("Ouro")
    }
    else if (media >= 81 && media <= 90) {
        console.log("Diamante")
    }
    else {
        console.log("Imortal")
    }
    console.log("O Herói tem o saldo de " + media.toFixed(2) + "% de vitórias")
}
MediadeVictorias(10, 5, 5)
MediadeVictorias(15, 5, 5)
MediadeVictorias(24, 24, 24)
MediadeVictorias(60, 10, 10)

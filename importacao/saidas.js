const saidas = ["REP", "REC", "APR"];
i = 0;
function gets() {
    const valor = saidas[i];
    i++;
    return valor;
}
function print(texto) {
    console.log(texto);
}
module.exports = { gets, print };

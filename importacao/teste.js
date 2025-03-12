//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
let aliquota=0;
//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    let aliquota;
    for(let i=0;i<3;i++){
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }else if (salario>1100 && salario<=2500){
        aliquota=0.10;
    }else if (salario>2500){
        aliquota=0.15;
    }
    return aliquota * salario;
}
}
//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = (valorSalario - valorImposto) + valorBeneficios;
print(saida.toFixed(2));
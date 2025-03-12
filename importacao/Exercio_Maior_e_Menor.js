const { gets, print } = require('./funcao_auxiliares2.js');

const n = gets();
let maiorNumeropar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if(maiorNumeropar === null || (numero > maiorNumeropar)){
            maiorNumeropar = numero;
        }
        
       
    } else if (menorNumeroImpar === null || numero < menorNumeroImpar) {
        menorNumeroImpar = numero;

    }

}
print('Maior número par: '+ maiorNumeropar);

print("Menor número Impar: "+menorNumeroImpar);




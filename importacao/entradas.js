const gets = () => prompt("Enter a number:"); // Define gets function
const print = console.log; // Define print function

const N = parseInt(gets());
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
    const numero = parseInt(gets());

    if (numero % 2 == 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else if (numero % 2 != 0) {
        if (numero < menorNumeroImpar || menorNumeroImpar === 1) {
            menorNumeroImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);
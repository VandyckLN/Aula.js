const number= [1,2,3,4,5,6,7,8,9,10];

for (let i = 1; i < 10; i++) { // i = 1 para não multiplicar por 0
    for (let j = 0; j < 10; j++) { // j = 0 para multiplicar por 10
        console.log(`${number[i]} x ${number[j]} = ${number[i] * number[j]} `);
    }
    
}
console.log('Fim da tabuada');
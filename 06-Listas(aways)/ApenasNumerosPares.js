const numbers= [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++) {
    const numerosPares = numbers[i] ;
    if (numerosPares% 2 === 0){
        console.log(numbers[i], 'numero par');
    }
    
}
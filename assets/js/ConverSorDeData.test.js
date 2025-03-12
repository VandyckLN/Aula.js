const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function converterParaDiaMesAno(dataStr) {
    const [ano, dia, mes] = dataStr.split("-");
    return `${dia}/${mes}/${ano}`;
}

readline.question('Digite a data (AAAA-DD-MM): ', (dataInput) => {
    // Validate date format using regex
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    if (dateRegex.test(dataInput)) {
        const [ano, dia, mes] = dataInput.split("-");
        
        // Validate numeric ranges
        if (dia >= 1 && dia <= 31 && 
            mes >= 1 && mes <= 12 && 
            ano >= 1900 && ano <= 2100) {
            console.log(converterParaDiaMesAno(dataInput));
        } else {
            console.log("Data inválida: valores fora do intervalo permitido");
        }
    } else {
        console.log("Formato de data inválido. Use AAAA-DD-MM");
    }
    readline.close();
});
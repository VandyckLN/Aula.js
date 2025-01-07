
const readline = require('readline'); // Importa o módulo readline para ler entradas do usuário

const rl = readline.createInterface({
    input: process.stdin, // Define a entrada padrão como o teclado
    output: process.stdout // Define a saída padrão como o console
});

const bandeiras = ['Visa', 'Master', 'AmericanExpress', 'Elo', 'Hipercard', 'Discover', 'Outros']; // Lista de bandeiras de cartões aceitas

// Pergunta ao usuário o número do cartão
rl.question('Digite o número do cartão: ', (cartao) => {
    // Remove espaços do número do cartão
    const numeroCartao = cartao.replace(/\s+/g, '');

    if (numeroCartao.length < 13 || numeroCartao.length > 16) {
        console.log('Número de cartão inválido');
        rl.close(); // Fecha a interface de leitura
    } else {
        // Pergunta ao usuário a bandeira do cartão
        rl.question('Digite a bandeira do cartão: ', (bandeira) => {
            if (bandeiras.includes(bandeira)) {
                console.log('Bandeira válida');

                /**
                 * Valida um número de cartão de crédito com base no seu tipo (bandeira).
                 *
                 * @param {string} numero - O número do cartão de crédito a ser validado.
                 * @param {string} bandeira - O tipo do cartão de crédito (por exemplo, 'Visa', 'Master', 'AmericanExpress', 'Elo', 'Hipercard', 'Discover').
                 * @returns {boolean} - Retorna true se o número do cartão de crédito for válido para o tipo fornecido, caso contrário, false.
   
                 */
                const validarCartao = (numero, bandeira) => {
                    if (bandeira === 'Visa' && numero.startsWith('4') && (numero.length == 13 || numero.length == 16)) {
                        console.log('Cartão Visa válido');
                        return true;
                    } else if (bandeira === 'Master' && (numero.startsWith('51') || numero.startsWith('55') || numero.startsWith('2221') <= numero.startsWith(' 2224 ')) && numero.length == 16) {
                        console.log('Cartão Master válido');
                        return true;
                    } else if (bandeira === 'AmericanExpress' && (numero.startsWith('34') || numero.startsWith('37')) && numero.length == 15) {
                        return true;
                    } else if (bandeira === 'Elo' && (numero.startsWith('4011') || numero.startsWith('4312') || numero.startsWith('4389') || numero.startsWith('451416') || numero.startsWith('636297') || numero.startsWith('506699') || numero.startsWith('5067') || numero.startsWith('5090') || numero.startsWith('4576')) && (numero.length >= 15 && numero.length <= 16)) {
                        console.log('Cartão Elo válido');
                        return true;
                    } else if (bandeira === 'Hipercard' && (numero.startsWith('6062') || numero.startsWith('6900')) && numero.length == 16) {
                        return true;
                    } else if (bandeira === 'Discover' && (numero.startsWith('6011') || numero.startsWith('65') || numero.startsWith('644') || numero.startsWith('645') || numero.startsWith('646') || numero.startsWith('647') || numero.startsWith('648') || numero.startsWith('649')) && numero.length == 16) {
                        console.log('Cartão Discover válido');
                        return true;
                    } else if (bandeira === 'Outros') {
                        console.log('Cartão inválido');
                        return false;
                    } else {
                        console.log('Cartão inválido');
                        return false;
                    }
                };

                const isValid = validarCartao(numeroCartao, bandeira);
                console.log(`Cartão é ${isValid ? 'válido' : 'inválido'}`);
                rl.close(); // Fecha a interface de leitura
            } else {
                console.log('Bandeira inválida');
                rl.close(); // Fecha a interface de leitura
            }
        });
    }
});

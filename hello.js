const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Faça Seu Login Aqui");
// Mensagem de boas-vindas

readline.question("Digite seu nome de usuário: ", (nickname) => {
    readline.question("Digite sua senha: ", (password) => {
        if (password == "chiquinho123") {
            console.log("Bem vindo, " + nickname + "!");
        } else {
            console.log("Senha inválida");
        }
        
        readline.close();
    });
});

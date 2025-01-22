// Modelo de análise de evolução de impostos (ICMS e Federais) - 2014-2023
const dadosImpostos = {
    anos: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    icms: [
        { ano: 2014, valor: 352.2 },
        { ano: 2015, valor: 363.5 },
        { ano: 2016, valor: 371.8 },
        { ano: 2017, valor: 385.4 },
        { ano: 2018, valor: 401.2 },
        { ano: 2019, valor: 415.6 },
        { ano: 2020, valor: 398.3 }, // Queda devido à pandemia
        { ano: 2021, valor: 425.7 },
        { ano: 2022, valor: 445.2 },
        { ano: 2023, valor: 462.1 },
        { ano: 2024, valor: 475.2 }
    ],
    impostosFederais: [
        { ano: 2014, valor: 512.8 },
        { ano: 2015, valor: 525.3 },
        { ano: 2016, valor: 538.9 },
        { ano: 2017, valor: 552.4 },
        { ano: 2018, valor: 571.6 },
        { ano: 2019, valor: 585.2 },
        { ano: 2020, valor: 545.8 }, // Queda devido à pandemia
        { ano: 2021, valor: 598.4 },
        { ano: 2022, valor: 625.7 },
        { ano: 2023, valor: 645.3 },
        {ano: 2024, valor: 665.3},
    ]
};

// Função para calcular crescimento percentual
function calcularCrescimento(dadosImposto) {
    const crescimentoAnual = [];
    
    for (let i = 1; i < dadosImposto.length; i++) {
        const crescimento = ((dadosImposto[i].valor - dadosImposto[i-1].valor) / dadosImposto[i-1].valor) * 100;
        crescimentoAnual.push({
            ano: dadosImposto[i].ano,
            crescimento: crescimento.toFixed(2)
        });
    }
    return crescimentoAnual;
}

// Analisar crescimento
const crescimentoICMS = calcularCrescimento(dadosImpostos.icms);
const crescimentoFederais = calcularCrescimento(dadosImpostos.impostosFederais);

// Exibir resultados
console.log("Análise de Crescimento ICMS:");
crescimentoICMS.forEach(ano => {
    console.log(`${ano.ano}: ${ano.crescimento}%`);
});

console.log("\nAnálise de Crescimento Impostos Federais:");
crescimentoFederais.forEach(ano => {
    console.log(`${ano.ano}: ${ano.crescimento}%`);
});
// Função para criar gráfico usando console.log
function criarGrafico(dadosImposto, titulo) {
    console.log(`\n${titulo}`);
    console.log("-".repeat(50));
    
    dadosImposto.forEach(item => {
        const barSize = Math.round(item.valor / 10);
        const bar = "█".repeat(barSize);
        console.log(`${item.ano}: ${bar} (${item.valor})`);
    });
}
// Dados do salário mínimo Brasil 2014-2023
const salarioMinimo = [
    { ano: 2014, valor: 724.00 },
    { ano: 2015, valor: 788.00 },
    { ano: 2016, valor: 880.00 },
    { ano: 2017, valor: 937.00 },
    { ano: 2018, valor: 954.00 },
    { ano: 2019, valor: 998.00 },
    { ano: 2020, valor: 1045.00 },
    { ano: 2021, valor: 1100.00 },
    { ano: 2022, valor: 1212.00 },
    { ano: 2023, valor: 1320.00 },
    { ano: 2024, valor: 1412.00 }

    
];

// Calcular crescimento do salário mínimo
const crescimentoSalario = calcularCrescimento(salarioMinimo);

// Exibir análise comparativa
console.log("\nAnálise de Crescimento Salário Mínimo:");
crescimentoSalario.forEach(ano => {
    console.log(`${ano.ano}: ${ano.crescimento}%`);
});

console.log("\nComparativo de Crescimento Anual:");
for(let i = 0; i < crescimentoSalario.length; i++) {
    console.log(`\nAno ${crescimentoSalario[i].ano}:`);
    console.log(`Salário Mínimo: ${crescimentoSalario[i].crescimento}%`);
    console.log(`ICMS: ${crescimentoICMS[i].crescimento}%`);
    console.log(`Impostos Federais: ${crescimentoFederais[i].crescimento}%`);
}

// Criar gráficos
console.log("\nGRÁFICOS DE EVOLUÇÃO DOS IMPOSTOS");
criarGrafico(dadosImpostos.icms, "ICMS ao longo dos anos");
criarGrafico(dadosImpostos.impostosFederais, "Impostos Federais ao longo dos anos");
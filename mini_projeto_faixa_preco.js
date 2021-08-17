// Javascript Aula 47 - Faixa de Preçco (Exercício)
// e que você crie um arrai de objeto de faixa de preço para que ela possa ser usado em um site igual do mercado livre
// faixas, tooltip, minimo, maximo

// Primeira Opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 999999}
];

// Segunda Opção (factory Function)
function criaFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('a',1,100)
];


// Terceira Opção (Construct Functions
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
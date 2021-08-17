// Criar função para mostrar os numeros primos

//Primos
//Compostos

//Ex: 10, 11
// 10 (1 ou por ele mesmo)
// 10 - 1,2,4,6,10
// 11 - 1,11
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        if(NumeroPrimo) {
            console.log(numero);
        }
    }
}

function NumeroPrimo(numero) {
        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                return false;
            }
        }
        return true;
}
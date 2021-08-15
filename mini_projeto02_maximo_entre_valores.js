// Escreva uma função que usa 2 numeros e retorna o maior entre eles

let valorMaior = max(10,5);
console.log(valorMaior); 
 
function max(numero1,numero2) {
    if(numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

function max2(numero11,numero22) {
    return numero11 > numero22 ? numero11: numero22;
}
// Javascript Aula 52 - Introdução Arrays
// Add novos elementos

const numeros = [1,2,3];

// inicio
numeros.unshift(0);
console.log(numeros);
// meio
numeros.splice(1,0,'a');
console.log(numeros);
// Final
numeros.push(5);
console.log(numeros);
//==============================================================









// Encontrar Elementos
const numeros1 = [1,2,3,4];
// numeros1.indexOf(2);
console.log(numeros1.indexOf(2));
console.log(numeros1.lastIndexOf(1))
console.log(numeros1.indexOf(2) !== -1);
console.log(numeros1.includes(2));

// Encontrar Elementos de referências
const marcas = [
    {id:1 , nome: 'a'},
    {id:1 , nome: 'a'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

// Usando arrow Function
const marcas2 = [
    {id:1 , nome: 'a'},
    {id:1 , nome: 'a'}
];

console.log(marcas2.find(marca => marca.nome === 'a'));
//=============================================









// Remover Elementos
const numeros2 = [1,2,3,4,5,6];
numeros2.push();
numeros2.unshift();
numeros2.splice();

//Final
const ultimo = numeros2.pop();
console.log(ultimo);
console.log(numeros2);
// inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros2);
// Meio
const meio = numeros2.splice(2,1);
console.log(meio);

//Esvaziando um Array
let numeros3 = [1,2,3,4,5,6];
let outros = numeros3;
// Solução 01
numeros3 = []; // modificaria acima de CONST para LET
console.log(outros);

// Solução 02
numeros3.lenght = 0;
console.log(numeros3);
console.log(outros);

// Solução 03
numeros3.splice(0,numeros3.length);
console.log(numeros3);
console.log(outros);

// Solução 04
// while (numeros3.length > 0) {
//     numeros.pop();
// }
//=======================================================================






// Combinar Arrays e Dividir Elemento
const primeiro01 = [1,2,3];
const segundo = [4,5,6];
// Combinar
const combinado = primeiro01.concat(segundo);
console.log(combinado);
// Dividir
const cortado = combinado.slice(1,3);
const cortado02 = combinado.slice();
console.log(cortado);
//==========================================

// Operador Spread
const primeiro02 = [1,2,3];
const segundo01 = [4,5,6];

// const combinado02 = primeiro02.concat(segundo01);
const combinado02 = [...primeiro02,'a',...segundo01,'#'];
console.log(combinado02);
// const cortado03 = combinado.slice();
const clonado = [...combinado02];
console.log(clonado);

//=====================================================




// Interando um Array
const numeros04 = [1,2,3,4,5];

// ForEach
numeros04.forEach((num, indice03) => console.log(num, indice03))
//===========================================



// Combinando array
const numeros05 = [1,2,3,4,5];

const combinado05 = numeros05.join('.');
console.log(combinado05);

const frase = "olá! bem vindo ao curso";
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));

// slug

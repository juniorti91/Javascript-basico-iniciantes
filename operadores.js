// Operadores Aritmeticos(matemática)

// ex: + , - , * , / , ** 
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5); // Exponencial
// ++ -- Operadores de incremento e decremento
let idade = 18;
console.log(idade++); // para exibir logo de primeiro o incremente e so colocar o ++ ou -- antes da variavel
console.log(idade);
//==============================================================//

// Operadores Atribuição
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);
//==============================================================//

// Operadores de Igualdade
//Igualdade estrita
console.log(1 === 1);
console.log('1' === 1);

//Igualdade solta
console.log(1 == 1);
console.log('1' == 1);
//==============================================================//

//Operador Ternário
//Tem um cliente, 100 premium, comum
let pontos  = 100;
let tipo = pontos > 100 ? 'premier' : 'comum';
console.log(tipo);
//==============================================================//

// operadores de Comparação
// Operadores Lógicos e (&&)
//retorna TRUE se os dois operandos forem TRUE
console.log(true && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// Operadores Lógicos e (||)
//retorna TRUE se um dos operandos forem TRUE
let maiorDeIdade2 = true;
let possuiCarteiraDeTrabalho2 = false;
let podeAplicar2 = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ',podeAplicar2);

//Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado',candidatoRecusado);

// COmparacao não boleanos
//falsy
//undefined
//null
//0
//false
//''
//NaN - not a number
//Truthy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);


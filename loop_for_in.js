// for-in

const pessoa = {
    nome: 'junior',
    idade: 25
};

//key-value
for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice]);
}
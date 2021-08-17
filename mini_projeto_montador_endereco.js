// Javascript - Objeto Endereço

// Criar um objeto endereço que contem:
// Rua
// Cidade 
// CEP
// exibirEndereco(endereco)

let endereco2 = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for(let chave in endereco) {
        console.log(chave,endereco[chave]);
    }
}

exibirEndereco(endereco2);
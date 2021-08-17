// Construtor de funcções
// camelCase - umDoisTresQuatro, sempre vai começar com uma letra minuscula
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}

// Pascal Case - UmDoisTresQuatro, sempre vai começar coma letra maiuscula
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}

const celular = new Celular('asus', 5.5, 5000);
console.log(celular);
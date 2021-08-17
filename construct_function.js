// Javascript Aula 46 - Construct Function (Exercicio)

// Criar um objeto postagem
// titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo

function Postagem(titulo,mensagem,autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaaovivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);
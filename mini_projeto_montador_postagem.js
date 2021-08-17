// Javascript Aula 45 - Objeto Postagem de Blog (Exercício)
// Eu quero que você crie neste exercicio um objeto de postagem de blog que vai conter as seguintes propriedades
// postagem
/*
titulo
mensagem
autor
visualizacoes
comentarios
    (autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
};

console.log(postagem);
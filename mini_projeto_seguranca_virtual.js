function Verificarentrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if(ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeentrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoDeentrada').innerText = 'Você não pode Entrar!'
    }
}
//Velocidade maxima de 70km
// a cada 5km acima do limite voce ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"
verificaVelocidade(129);

function verificaVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log('ok');
    } else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if(pontos >= 12) {
            console.log('Carteira Suspensa');
        } else {
            console.log('Pontos',pontos);
        }
    }
}
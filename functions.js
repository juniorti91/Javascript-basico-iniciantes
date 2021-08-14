// nomear uma função = verbo + substantivo
// let corSite = "azul";
// function resetaCor(){
//     corSite = "";
// };

// console.log(corSite);
// resetaCor();
// console.log(corSite);

//=====SEGUNDA FORMA=======
let corSite = "azul";
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

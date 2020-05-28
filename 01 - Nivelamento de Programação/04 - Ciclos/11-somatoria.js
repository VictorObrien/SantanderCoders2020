// Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele. A função executa isso através do for 0+1+2+3

function somatoria(x){
    let soma = 0;
    for (let i = 0; i<x; i++){
        soma = soma + i;
    }
    return soma
}
/* ////// INSTRUÇÕES //////

Escreva uma função fatorial, que calcule o fatorial de um número. */

////// SOLUÇÃO //////

function fatorial(valor){
    resultado = 1
    for (let i = 1; i <= valor; i++) {
        resultado *= i     
    }
    return resultado    
}

console.log(fatorial(5))
/* ////// INSTRUÇÕES //////

Queremos representar uma escada com altura variável, utilizando um array de strings.
Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. */

////// SOLUÇÃO //////

function escada(quantidade){
    var escada = [];
    for (let i = 1; i <= quantidade; i++) {
        escada.push(" ".repeat(quantidade -i)+"#".repeat(i));    
    }
    return escada;
}

console.log(escada(10))

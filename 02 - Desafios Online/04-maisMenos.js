/* ////// INSTRUÇÕES //////

Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

Escreva a função maisMenos.
 */

////// SOLUÇÃO //////

function maisMenos(array){
    retorno = []
    
    let positivos = array.filter((indice) => indice > 0)
    let zeros = array.filter((indice) => indice == 0)
    let negativos = array.filter((indice) => indice < 0)

    retorno[0] = (positivos.length / array.length)
    retorno[1] = (zeros.length / array.length)
    retorno[2] = (negativos.length / array.length)

    return retorno
}

array = [-5, 0, 8, 6]

console.log(maisMenos(array))
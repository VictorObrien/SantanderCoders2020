/* ////// INSTRUÇÕES //////

Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7. 
Escreva a função produto

*/

////// SOLUÇÃO //////

function produto(array){
    valorAtual = 1;
    for (const valor of array){
        valorAtual *= valor;
    }
    return valorAtual;
}

lista = [1, 4, 7]

console.log(produto(lista))
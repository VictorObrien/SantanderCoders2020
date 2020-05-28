// Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

function mover(array1, array2){
    valor = array1.pop()
    array2.push(valor)
}
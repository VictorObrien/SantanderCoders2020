// Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

function contem(array, elemento){
    retorno = array.indexOf(elemento)
    if (retorno == -1){
        return false
    }
    else {
        return true
    }    
}
/* Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui.

Você tem que devolver a medalha que corresponde às primeiras posições de uma competição:

 medalhaDeAcordoComPosto (1)
"ouro"
 medalhaDeAcordoComPosto (2)
"prata"
 medalhaDeAcordoComPosto (3)
"bronze"
medalhaDeAcordoComPosto (4)
"nada"
 medalhaDeAcordoComPosto (5)
"nada" */

function medalhaDeAcordoComPosto(numero){
    medalhas = ["","ouro","prata", "bronze"]

    if (numero == 1 || numero == 2 || numero == 3){
        retorno = medalhas[numero]
        return retorno
    } else {
        return "nada"
    }
}
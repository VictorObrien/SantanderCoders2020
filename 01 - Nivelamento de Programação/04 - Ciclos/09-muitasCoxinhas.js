// Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos. 

function somarMoedasDe25(quantidadeDeMoedas){
    let soma = 0
    for (let i=0; i<quantidadeDeMoedas; i++){
        soma = soma + 0.25
    }
    return soma
}


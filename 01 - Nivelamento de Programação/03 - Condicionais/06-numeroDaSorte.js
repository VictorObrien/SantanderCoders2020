// Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

function eNumeroDaSorte(num){
    return num > 0 && (num%2==0 || num%3==0) && num != 15;
}
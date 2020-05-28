// Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

function possoIrAoBanco(diaDaSemana, horaAtual){
    var dia =  (diaDaSemana !== "Sábado" && diaDaSemana !== "Domingo")
    var hora = (horaAtual >= 9 && horaAtual <=15)

    return dia && hora
    
}
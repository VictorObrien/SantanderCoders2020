// Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura do exercício dos exercícios anteriores, porém não tão rápido! Mas lembre-se que esta função precisa retornar um array.

function saldoDeMesesComLucro(umPeriodo) {
  var lucroTotal = [];
  for (let i=0; i< umPeriodo.length; i++) {
    if(umPeriodo[i] > 0){
        let mes = umPeriodo[i]
        lucroTotal.push(mes)
    }
  }
  return lucroTotal;
}
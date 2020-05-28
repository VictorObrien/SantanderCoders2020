// Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9. Escreva a função naipeDeTruco

function naipeDeTruco(naipe){
  listaNaipe = []
  for(let i = 1; i <= 12; i++ ){
      if (i == 8 || i == 9){
          i++
      } else{
          posicao = i +" de " + naipe
          listaNaipe.push(posicao)
      }
  }
  return listaNaipe
}
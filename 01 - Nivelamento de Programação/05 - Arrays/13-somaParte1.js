/* Tem algum problema na função somaLucroSemestre que escrevemos anteriormente? Funcionará com trimestres? E com quadrimestres?

Experimente testar a função no terminal utilizando o console.log, fazendo diferentes impressões na tela!

Lembre-se de testar no mínimo 3 vezes o console.*/

function somaLucroSemestre(umSemestre) {
    return umSemestre[0] + umSemestre[1] +
        umSemestre[2] + umSemestre[3] +
        umSemestre[4] + umSemestre[5];
}

var lucrosPrimeiroTrimestre = [80, 453, 1000];
var lucrosSegundoBimestre = [50, -12]
var lucrosTerceiroTrimestre = [63, 12, 50, 45]

console.log(somaLucroSemestre(lucrosPrimeiroTrimestre))
console.log(somaLucroSemestre(lucrosSegundoBimestre))
console.log(somaLucroSemestre(lucrosTerceiroTrimestre))
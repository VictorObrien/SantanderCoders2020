// Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida. Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).

function caloriasDeTrote(x){
    let calorias = 0;
    for (let i=1; i<=x; i++){
        calorias = calorias + (5 * i);
    }
    return calorias
}


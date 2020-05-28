// Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto, que recebe um nome e um sobrenome como parâmetros, e que irá devolver o tamanho total, contando um espaço extra para separar ambos:

function tamanhoNomeCompleto(nome, sobrenome){
    let nomeCompleto = (nome + " " + sobrenome)
    return nomeCompleto.length;
}
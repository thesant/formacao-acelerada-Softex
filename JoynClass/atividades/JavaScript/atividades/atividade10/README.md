### script:

    // Funcao sem parametro e sem retorno que printa na tela uma saldacao
    function saldacao() {
        console.log('Seja bem vindo: ')
    }

    // Funcao Com parametro e com retorno que rece um nome e retorna eo nome recebido
    function getUser(nome) {
    return nome 
    }

    // arrowfunction que recebe um usuario como parametro,
    // no caso a funcao 'name' e retorna o nome + a data na qual esta logado.
    let pessoa = (usuario) => (`${usuario}\n logado as ${Date()}`)



    // Exibindo no console a saldacao + combinacao entre funcao name e arrowfunction
    console.log(saldacao(),pessoa(getUser('Samuel')))


### saida:

    Seja bem vindo: 
    undefined Samuel
    logado as Sun Aug 27 2023 19:18:16 GMT-0300 (Brasilia Standard Time)

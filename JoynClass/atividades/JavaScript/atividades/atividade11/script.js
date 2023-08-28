/*
Crie um código com um objeto chamado Banco. ✅

Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência ✅

e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta. ✅
Observações:buscar saldo deve retornar o valor atual do saldo; ✅
para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;✅
para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;✅
o número da conta deve retornar o número da conta.✅
*/

function organiza(value) {
    const separador = '-----'
    return console.log(separador.repeat(value))
}


const banco = {
    conta: 12345,
    saldo: 155.00,
    tipoConta: 'Corrente',
    agencia: '88',
    getSaldo(){ return `SALDO DISPONIVEL: ${this.saldo}`},
    postDeposito(value){return `DEPOSITO: R$${value}.\nSALDO ATUAL: R$${this.saldo+=value}`},
    getSaque(value){return `SAQUE: R$${value}.\nSALDO ATUAL: R$${this.saldo-=value}`},
    getNumConta(){ return `NUMERO DA CONTA: ${this.conta}` }
    
    
}


console.log(banco.getSaldo())
organiza(5)

console.log(banco.postDeposito(5))
organiza(5)

console.log(banco.getSaque(100))
organiza(5)

console.log(banco.getNumConta())
organiza(5)

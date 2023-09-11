class Pessoa{
    constructor(nome,idade){
        this._nome = nome;
        this._idade = idade;
    }
    getInfoPessoa(){
        return `Nome: ${this._nome}, Idade: ${this._idade}`
    }
}

class Funcionario extends Pessoa{
    constructor(nome,idade,salario, cargo){
        super(nome,idade);
        this._salario = salario;
        this._cargo = cargo;
    }

    getInfoCargo(){
        return `Cargo: ${this._cargo}, Salario: R$ ${this._salario}`
    }
}

const funcionario = new Funcionario('Joana', 45,1500,'Balconista')

console.log(funcionario.getInfoPessoa())
console.log(funcionario.getInfoCargo())
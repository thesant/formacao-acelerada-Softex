class Person {
    constructor(value){
        this.value = value;
    }
    
    get obterName(){
        return this.value;
    }

    set definirName(nome){
        this.value = nome;
    }
}

const pessoa = new Person('TESTE')
console.log(pessoa.obterName);

pessoa.definirName = 'Nome do Usuario'
console.log(pessoa.obterName)
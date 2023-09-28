class Sanduiche{
  getNome() {return this.name;};
  valor(){};

}


class AdicionalDecorator extends Sanduiche{

}

class FrangoAssado extends Sanduiche{
    getNome(){
        return `Frango Assado`
    }
     valor(){
        return 4.50
     }
    
}


class Pepperoni extends AdicionalDecorator{
    constructor(sanduiche){
        this.sanduiche = sanduiche;
    }
    getNome(){
        return this.sanduiche.getNome() + ' com Pepperoni'
    }

    valor(){
        return `Total: R$ ${0.99+this.sanduiche.valor()}`
    }
}


class QueijoMussarelaRalado extends AdicionalDecorator{
    constructor(sanduiche){
        super(AdicionalDecorator);
        this.sanduiche = sanduiche;
    }

    getNome(){
        return this.sanduiche.getNome() +' com Queijo Mussarela Ralado'
    }

    valor(){
        return `Total: R$ ${2.00+this.sanduiche.valor()}`
    }
}


console.log('Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49. ')
let frangoAssado = new FrangoAssado()
frangoAssado = new QueijoMussarelaRalado(frangoAssado)
console.log(frangoAssado.getNome())
console.log(frangoAssado.valor())

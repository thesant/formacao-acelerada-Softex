class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    andar(){
        console.log(`${this.nome} esta andando`);
    }

    parar(){
        console.log(`${this.nome} esta parado`);
    }

    comer(){
        console.log(`${this.nome} esta comendo`);
    }
}

const pessoa = new Pessoa('Pessoa')
pessoa.andar();
pessoa.parar();
pessoa.comer();


class Carro{
    
    parado(){
      console.log('Carro parado');  
    }

    acelerar(){
        console.log('Carro acelerando');  
      }

    movimento(){
    console.log('Carro em movimento');  
    }
}

const carro = new Carro();

carro.parado();
carro.acelerar();
carro.movimento();


class Eletricidade{
    constructor(corrente, amperagem, tensao ){
        this.corrente = corrente;
        this.amperagem = amperagem;
        this.tensao = tensao;            
    }
    
    medirCorrente(){
        console.log(`a corrente eletrica e de ${this.corrente} i`)
    }
    medirAmperagem(){
        console.log(`o valor da resistencia e de ${this.amperagem} ohm`)
    }
    medirTensao(){
        console.log(`a tensao e de ${this.tensao} v`)
    }
}


const eletricidade = new Eletricidade(15,12,110)

eletricidade.medirCorrente();
eletricidade.medirAmperagem();
eletricidade.medirTensao();
class Energia{
   
    eolica(){
        console.log(`A energia eolica vem dos ventos`)
    }
    fotovotaica(){
        console.log(`A energia fotovotaica obtida através da conversão direta da luz em eletricidade`)
    }
    solar(){
        console.log(`A energia solar é aquela proveniente da radiação do Sol.`)
    }
}
const energia = new Energia();

energia.eolica();
energia.fotovotaica();
energia.solar();
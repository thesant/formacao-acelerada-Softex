class Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        this.modelo =modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone(){
        Object.assign({},this)
    }
    represent() {
        return `Veículo: ${this.modelo}, ${this.marca}, ${this.cor}, ${this.numeroRodas}`;
      }
}

// Classe Moto
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    // Método represent
    represent() {
      return `Moto: ${super.represent()}`;
    }
  }

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    // Método represent
    represent() {
      return `Carro: ${super.represent()}, ${this.numeroPortas}`;
    }
  }


// Classe Aplicação
class Aplicacao {
    constructor() {
      this.veiculos = [
        new Carro("Celta", "Chevrolet", "Preto", 4, 2),
        new Carro("Palio", "Fiat", "Vermelho", 4, 4),
        new Carro("Uno", "Fiat", "Branco", 4, 2),

        new Moto("Bros", "Honda", "Laranja", 2),
        new Moto("XTZ", "Yamaha", "Azul", 2),
        new Moto("Tenerer", "Yamaha", "Preto", 2),
      ];
     
    }
  
    cloneVeiculos() {
      const cloneVeiculos = [];
      for (const veiculo of this.veiculos) {
      
        cloneVeiculos.push(veiculo);
      }
      
      return cloneVeiculos;
    }
  
    main() {
      const vaiculos = this.veiculos;
      for (const veiculo of vaiculos) {
        console.log(veiculo.represent());
      }
    }
  }

  const aplicacao = new Aplicacao();
aplicacao.main();

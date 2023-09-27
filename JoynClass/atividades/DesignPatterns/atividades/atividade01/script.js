class Computer{
     getRam(){};
     getHdd(){};
     getCpu(){};
     getType(){};
}


class Pc extends Computer {
    constructor( ram, hdd, cpu) {}
  
    getRam() {
      return this.ram;
    }
  
    getHdd() {
      return this.hdd;
    }
  
    getCpu() {
      return this.cpu;
    }
  
    getType() {
      return "pc";
    }
  
    toString() {
      console.log(`Computador: {ram: ${this.ram}, hdd: ${this.hdd}, cpu: ${this.cpu}, type: ${this.getType()}}`);
    }
  }
  
  // Classe de produto
  class Server extends Computer {
    constructor( ram, hdd, cpu) {}
  
    getRam(){
      return this.ram;
    }
  
    getHdd(){
      return this.hdd;
    }
  
    getCpu(){
      return this.cpu;
    }
  
    getType() {
      return "server";
    }
  
    toString(){
      console.log(`Servidor: {ram: ${this.ram}, hdd: ${this.hdd}, cpu: ${this.cpu}, type: ${this.getType()}}`);
    }
  }
  
  class ComputerFactory {
    createComputer(type) {
        switch (type) {
            case "pc":
              return new Pc(ram, hdd, cpu);
            case "server":
              return new Server(ram, hdd, cpu);
            default:
              throw new Error("Tipo de computador inválido: " + type);
          }
    }
}


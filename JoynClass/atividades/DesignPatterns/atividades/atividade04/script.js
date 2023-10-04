class Galinha {
    comer(animal) { return `${animal} esta comendo` };
    correr(animal) { return `${animal} esta correndo` };
};



class AdaptadorPato extends Galinha {
    constructor(pato) {
        super(Galinha);
        this.pato = pato;
    };
};


class AptadorPatoDemo extends AdaptadorPato {
    constructor() {
        super(AdaptadorPato)
    };
    main() {
        const galinha = new AdaptadorPato(this.pato);
    };
};


const pato = new AdaptadorPato('Pato');
console.log(pato.comer(pato.pato));
console.log(pato.correr(pato.pato));
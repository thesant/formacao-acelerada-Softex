const  calculator = require ("../core/calcUseCase.js");
const prompt = require('prompt-sync')();

class Sum extends calculator{
    execute(numA,numB){; 
        return `Strategy: Adicao. Resultado: ${numA+numB}`;
    }
}
class Sub extends calculator{
    execute(numA,numB){; 
        return `Strategy: Subtracao. Resultado: ${numA-numB}`;
    }
}

class Mult extends calculator{
    execute(numA,numB){; 
        return `Strategy: Multiplicacao. Resultado: ${numA*numB}`;
    };
}



class CalculatorFinal{
    constructor() {
        this.valueA = parseInt(prompt('Digite o primeiro valor: '));
        this.valueB = parseInt(prompt('Digite o segundo valor: '));
        this.opction = prompt('Escolha uma operacao: +,-,* :');
    }

    result() {
        switch (this.opction) {
            case '+':
                const sum = new Sum().execute(this.valueA,this.valueB);
                console.log(sum)
                break;
            case '-':
                const sub = new Sub().execute(this.valueA,this.valueB);
                console.log(sub)
                break;
            case '*':
                const mult = new Mult().execute(this.valueA,this.valueB);
                console.log(mult)
                break;
            default:
                console.log('Operação inválida');
                break;
        }
    }  

}

const implementsCalculator = new CalculatorFinal()
implementsCalculator.result()
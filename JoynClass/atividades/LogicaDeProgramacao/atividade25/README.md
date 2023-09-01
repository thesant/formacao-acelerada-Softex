
	class Cadastro{
		constructor(nome,salario,idade,diploma){
		    this.nome = nome;
		    this.salario = salario;
		    this.idade = idade;
		    this.diploma = diploma;
		}

		adiciona(pessoa){
		    console.log(`Variavel 'nome'    e do tipo: ${typeof pessoa.nome}`)
		    console.log(`Variavel 'salario' e do tipo: ${typeof pessoa.salario}`)
		    console.log(`Variavel 'idade'   e do tipo: ${typeof pessoa.idade}`)
		    console.log(`Variavel 'diploma' e do tipo: ${typeof pessoa.diploma}`)
		    console.log('\n')
		    
		    if(typeof pessoa.nome != 'string'){
		        console.log('A variavel precisa der do tipo string')
		        return null
		    }
		    else if(typeof pessoa.salario != 'number'){
		        console.log('A variavel precisa der do tipo number')
		        return null
		    }
		    else if(typeof pessoa.idade != 'number'){
		        console.log('A variavel precisa der do tipo number')
		        return null
		    }
		    else if(typeof pessoa.diploma != 'boolean'){
		        console.log('A variavel precisa der do tipo boolean')
		        return null
		    }else{
		        let dados = Object.assign({}, pessoa);
		        console.log(dados)
		        return dados
		    }
		   
		    
		   
		}
	}
const pessoa = new Cadastro();
const dados = 
    new Cadastro('Samuel',2000,27,true)


pessoa.adiciona(dados)


## Saida:
	Variavel 'nome'    e do tipo: string
	Variavel 'salario' e do tipo: number
	Variavel 'idade'   e do tipo: number
	Variavel 'diploma' e do tipo: boolean


	{ nome: 'samuel', salario: 2000, idade: 27, diploma: true }


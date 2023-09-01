## **INSTRUÇÕES DO PROJETO**



*Levando em consideração os aprendizados sobre as estruturas condicionais, elabore um algoritmo que possa descobrir, através de perguntas e respostas, qual é o meio de transporte que o usuário está considerando. O usuário deverá escolher uma das seguintes opções:*

- trator; 

- moto; 

- bicicleta. 


*Para chegar ao resultado, as perguntas precisam ser respondidas apenas com "Sim" ou "Não".*

	Exemplo:
		É terrestre? Sim.
		Cabe apenas uma pessoa? Sim.
		É pesado? Não.
		Tem pedal? Sim.
		Então, o transporte escolhido foi a bicicleta.

![Exibindo unnamed.png](https://lh3.googleusercontent.com/drive-viewer/AITFw-z7NhQ5rZlLn_pBJDujYXsi0bVnvQxUPKkK8ziYAeGf0bDYP6SzpKoeEBx057oc4xAmwnoKp-2AuWpYtnMCiz2KcgmS=w1920-h973)



### Resolução

<!-- Tomarei como base a declaração de variáveis em javascript-->

		let pessoa;
		let capacete;
		let pesado;
		let terrestree;
		
		console.log("Digite sim ou não para responder as perguntas");
		terrestre = prompt("O  veiculo é terrestre? ")
		
		if(terrestre == 'sim' || 'Sim'){
			capacete = toString(prompt("Usa capacete? "))
			if(capacete =='sim' || 'Sim' ){
				console.log("seu veiculo é uma moto")
	
			}else{
				var pessoa = toString(prompt("cabe apenas uma pessoa?"))
			}if(pessoa =='sim' || 'Sim' ){
				var pesado = toString(prompt("É pesado? "))
				if(pesado =='sim' || 'Sim'){
					console.log("seu veiculo é um trator")
				}else{
					console.log("seu veiculo é uma bicicleta")
				}
			}
	    }


### Script:
	function calculadora() {
	  var valor1 = parseInt(prompt("Digite o 1ª valor: "));
	  var operador = prompt("Digite o operador:[+, -, *, /] ");
	  var valor2 =  parseInt(prompt("Digite o 2ª valor: "));
	
	  var resultado;
	
	  switch (operador) {
	    case "+":
	      resultado = valor1 + valor2;
	      break;
	    case "-":
	      resultado = valor1 - valor2;
	      break;
	    case "*":
	      resultado = valor1 * valor2;
	      break;
	    case "/":
	      resultado = valor1 / valor2;
	      break;
	  }
	
	  if (operador == "/") {
	    var sobra = valor1 % valor2;
	    return console.log(`Total: ${resultado} Sobra: ${sobra}`);
	  } else {
	    console.log(`Total: ${resultado}`);
	  }
	
	}
	calculadora()


​    
### Saida:

    Digite o 1ª valor: 10
    Digite o operador:[+, -, *, /] +
    Digite o 2ª valor: 10
    Total: 20
    
    Digite o 1ª valor: 10
    Digite o operador:[+, -, *, /] -
    Digite o 2ª valor: 5
    Total: 5
    
    Digite o 1ª valor: 10
    Digite o operador:[+, -, *, /] *
    Digite o 2ª valor: 10
    Total: 100
    
    Digite o 1ª valor: 15
    Digite o operador:[+, -, *, /] /
    Digite o 2ª valor: 14
    Total: 1.0714285714285714 Sobra: 1
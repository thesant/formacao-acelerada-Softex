 	const prompt = require('prompt-sync')();
 	
 	function calculaMedia(){
 	    let nota1 = prompt("Digite a 1ª nota: ");
 	    if (isNaN(Number(nota1))) {  //verifica se o valor da 1ª nota é recibido é numerico
 	  	    throw new Error('O valor precisa ser numerico')
 	    }
 	    let nota2 = parseFloat(prompt("Digite a 2ª nota: "));
 	    if (isNaN(Number(nota2))) { //verifica se o valor da 2ª nota é  recibido é numerico
 	        throw new Error('O valor precisa ser numerico')
 	    }
 	    let nota3 = parseFloat(prompt("Digite a 3ª nota: "));
 	    if (isNaN(Number(nota3))) { //verifica se o valor da 3ª nota é  recibido é numerico
 	        throw new Error('O valor precisa ser numerico')
 	    }else{
 	
 		const media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
 	console.log(`Média final: ${media}`)
 	} 
 	
 	}


calculaMedia();

    Digite a 1ª nota: 10
    Digite a 2ª nota: 10
    Digite a 3ª nota: 10
    Média final: 10

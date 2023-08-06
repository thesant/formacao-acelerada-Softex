# DESAFIO:

*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.*

*Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.*

*Codifique a solução mais eficiente para buscar o número 20 no array.*


## Codigo:

Como se trata de uma colecao pequena e  desordenado
e como nao sabemos a posicao extata optei pelo Busca Linear



	const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

	const busca = 20;

	let i = 0;

	while (i < array.length) {
	  if (array[i] === busca) {
	    console.log(`valor: ${busca}  Posicao no array:  ${i}`);
	    break;
	  }
	  i++;
	}


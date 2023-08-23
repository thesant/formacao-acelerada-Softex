	function resultadoAluno(){
	  let nota1 = parseInt(prompt('Informe a primeira nota: '));
	  let nota2 = parseInt(prompt('Informe a segunda nota: '));
	  let nota3 = parseInt(prompt('Informe a terceira nota: '));
	  const media = (nota1+nota2+nota3)/3
	  console.log(media)
	  let check = media>=7 ? 'APROVADO' : 'REPROVADO';
	  return check
	}

	function objetivoAluno(){
	  let nota1 = parseInt(prompt('Informe a primeira nota: '));
	  let nota2 = parseInt(prompt('Informe a segunda nota: '));
	  const media = (nota1+nota2)/3
	  let check = media>=7 ? 'APROVADO' : `Voce precida de nota ${21-(nota1+nota2)} para ser aprovado`;
	  return check
	}



  function divide(x, y) {
     return x / y;
  }


  let primeiroValor = parseInt(prompt("Digite o dividendo: "));
  let segundoValor = parseInt(prompt("Digite o divisor: "));
  
  try {
    const resultado = divide(primeiroValor,segundoValor)
  } catch (error) {
    console.error('Ocorreu um erro:', error.message);
  } finally {
    console.log('Fim da função.');
  }


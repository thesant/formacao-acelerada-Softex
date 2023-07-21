var btn = document.getElementById('btn25');
btn.addEventListener('click',()=>{
    
    console.log("Ler o salário-base de um funcionário, calcular e mostrar o salário a receber,\
    sabendo-se que esse funcionário tem gratificação de 5% sobre o salário-base, e\
    paga imposto de 7% sobre o salário-base.")
    
    alert("Ler o salário-base de um funcionário, calcular e mostrar o salário a receber,\
    sabendo-se que esse funcionário tem gratificação de 5% sobre o salário-base, e\
    paga imposto de 7% sobre o salário-base.")
    
    let wage = parseFloat(prompt("Informe o salario base: "))
    let gratification=wage*5/100;
    let tax=wage*7/100;
    var wageFinal=wage+gratification-tax;

    console.log('Seu salário final sera: '+wageFinal)

})

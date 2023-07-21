var btn = document.getElementById('btn06');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia dois números inteiros e calcule sua soma, subtração,\
    multiplicação e divisão.")

    let num = prompt("Faça um programa que leia dois números inteiros e calcule sua soma, subtração,\
    multiplicação e divisão. \n\n Digite o primeiro valor inteiro: ")

    let num2 = prompt("Digite o segundo valor inteiro:")

    let add = parseInt(num) + parseInt(num2)
    let sub = parseInt(num) - parseInt(num2)
    let mul = parseInt(num) * parseInt(num2)
    let div = parseInt(num) / parseInt(num2)

    console.log(" Valor Adicao; "+add+'\n Valor subtracao: '+sub+'\n Valor multiplicacao: '+mul+'\n Valor divisao: '+div)

})

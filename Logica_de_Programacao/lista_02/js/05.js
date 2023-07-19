var btn = document.getElementById('btn05');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia um número inteiro, calcule a décima parte deste \
    número e exiba o resultado.")
    let num = prompt("Faça um programa que leia um número inteiro, calcule a décima parte deste \
    número e exiba o resultado.\n \nDigite um numero inteiro: ")
    x = parseInt(num)/10
    console.log("A decima parte sera de: " + x)

})

var btn = document.getElementById('btn14');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia quatro notas de um aluno e calcule a sua média obtida.")
    prompt(" Faça um programa que leia quatro notas de um aluno e calcule a sua média obtida.")
    let noteOne = prompt("Digite o valor da primeira nota: ")
    let noteTwo = prompt("Digite o valor da segunda nota: ")
    let noteTree = prompt("Digite o valor da terceira nota: ")
    let noteFour = prompt("Digite o valor da quarta nota: ")

    var result = noteOne+noteTwo+noteTree+noteFour/4
    console.log("O valor da media e de : "+result)

})

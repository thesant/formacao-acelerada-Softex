var btn = document.getElementById('btn13');
btn.addEventListener('click',()=>{
    
    console.log(" Faça um programa para calcular a área de um triângulo qualquer. O tamanho dos\
    lados deve ser informado pelo usuário.")
    
    alert("Faça um programa para calcular a área de um triângulo qualquer. O tamanho dos\
    lados deve ser informado pelo usuário.")

    let sideOne = prompt("Digite o primeiro valor da base: ")
    let sideTwo = prompt("Digite o primeiro valor da altura: ")

    var result = (sideOne*sideTwo)/2
    console.log("O valor da area do triângulo  e: "+result)

})

var btn = document.getElementById('btn12');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para calcular a área de um triângulo retângulo. O tamanho da\
    base e altura do triângulo deve ser informado pelo usuário.")
    
    alert("Faça um programa para calcular a área de um triângulo retângulo. O tamanho da\
    base e altura do triângulo deve ser informado pelo usuário.")

    let sideOne = prompt("Digite o primeiro valor da base: ")
    let sideTwo = prompt("Digite o primeiro valor da altura: ")

    var result = (sideOne*sideTwo)/2
    console.log("O valor da area do triângulo retângulo e: "+result)

})

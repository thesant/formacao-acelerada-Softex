var btn = document.getElementById('btn11');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para calcular a área de um retângulo. O tamanho dos lados\
    deve ser informado pelo usuário.")
    
    alert("Faça um programa para calcular a área de um retângulo. O tamanho dos lados\
    deve ser informado pelo usuário.  ")
    
    let sideOne = prompt("Digite o primeiro valor do primeiro lado: ")
    let sideTwo = prompt("Digite o primeiro valor do segundo lado: ")

    var result = sideOne*sideTwo
    console.log("O valor da area do retangula e: "+result)

})

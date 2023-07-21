var btn = document.getElementById('btn15');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que receba a altura do degrau de uma escada e a altura que o\
    usuário deseja alcançar subindo a escada. Calcular e mostrar quantos degraus o\
    usuário deverá subir para atingir seu objetivo, sem se preocupar com a altura do\
    usuário.")

    alert("Faça um programa que receba a altura do degrau de uma escada e a altura que o\
    usuário deseja alcançar subindo a escada. Calcular e mostrar quantos degraus o\
    usuário deverá subir para atingir seu objetivo, sem se preocupar com a altura do\
    usuário.")

    let heightOne = prompt("Digite o valor da altura do degrau: ")
    let heightTwo = prompt("Digite o valor da altura que almeija alcancar : ")
    
    var result = heightOne-heightTwo

    console.log('voce precisara de: '+result+'degraus para seu objetivo')
})

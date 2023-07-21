var btn = document.getElementById('btn33');
btn.addEventListener('click',()=>{
    
    console.log(" Faça um programa onde o usuário digita dois valores (a e b, ex. 10 e 15), e imprima\
    na tela todos os valores (inteiros) no intervalo entre os valores digitados.")
    
    alert(" Faça um programa onde o usuário digita dois valores (a e b, ex. 10 e 15), e imprima\
    na tela todos os valores (inteiros) no intervalo entre os valores digitados.")
    

    valueA = prompt("Informe o 1ª valor: ")
    valueB = prompt("Informe o 2ª valor: ")
    for(i=valueA;i<valueB;i++){
        console.log(i+1)
    }


})

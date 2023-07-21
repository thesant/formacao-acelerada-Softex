var btn = document.getElementById('btn27');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que gere três valores aleatórios inteiros.\
    i. Dica: use as funções rand() e srand(), ambas definidas na biblioteca\
    stdlib.h.")
    
    alert("Faça um programa que gere três valores aleatórios inteiros.\
    i. Dica: use as funções rand() e srand(), ambas definidas na biblioteca\
    stdlib.h.")
    
    for(i=0;i<3;i++)console.log('Numero gerado => '+Math.floor(Math.random()*100))

})

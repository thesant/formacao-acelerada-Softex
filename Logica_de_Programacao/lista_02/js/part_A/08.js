var btn = document.getElementById('btn08');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para ler um ângulo em graus e convertê-lo em radianos.")

    let num = prompt("Faça um programa para ler um ângulo em graus e convertê-lo em radianos.\
     \n\n Digite um numero inteiro: ")

     pi = 3.14
    
    radians = num * Math.PI/180
    console.log(radians)

})

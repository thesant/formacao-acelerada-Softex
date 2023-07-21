var btn = document.getElementById('btn10');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para calcular a área de um quadrado. O tamanho do lado deve\
    ser informado pelo usuário.")

    let num = prompt("Faça um programa para calcular a área de um quadrado. O tamanho do lado deve\
    ser informado pelo usuário. \n\n Digite o tamanho do lado: ")

    area = num*num
    console.log("A area sera de :" + area)

})

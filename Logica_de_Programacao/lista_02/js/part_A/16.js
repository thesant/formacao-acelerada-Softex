var btn = document.getElementById('btn16');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia o valor do raio de um círculo e calcule a área deste\
    círculo e sua circunferência. Use Pi como uma constante com valor de 3,1415.")
    
    alert("Faça um programa que leia o valor do raio de um círculo e calcule a área deste\
    círculo e sua circunferência. Use Pi como uma constante com valor de 3,1415.")

    let pi = 3.1415

    let raio = prompt("Digite o valor do raio para o circulo: ")
    var area = pi*raio
    var circ = (2*raio)*pi

    console.log("Area: "+ area+'\n Circunferencia: '+circ)
    

})

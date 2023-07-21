var btn = document.getElementById('btn17');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia o valor do raio de uma esfera e calcule a área de sua\
    superfície e o volume da esfera. Use Pi como uma constante com valor de 3,1415.")
    
    alert(" Faça um programa que leia o valor do raio de uma esfera e calcule a área de sua\
    superfície e o volume da esfera. Use Pi como uma constante com valor de 3,1415.")
    
    let raio = prompt("Digite o valor para o  raio: ")
    let pi = 3.1415


    v = (4/3) * pi * raio**3
    a = (4*pi)*raio**2

    console.log("Volume: "+v+'\nArea: '+a)

})

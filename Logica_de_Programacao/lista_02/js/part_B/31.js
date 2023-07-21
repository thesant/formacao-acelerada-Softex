var btn = document.getElementById('btn31');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que permita ao usuário fornecer diversos valores positivos. O\
    programa deverá parar de solicitar valores quando o usuário fornecer um valor\
    negativo. Ao final, o programa deverá informar a soma dos valores lidos. Obs: o\
    valor negativo (último valor entrado) não deve entrar na conta da soma.")
    
    alert("Faça um programa que permita ao usuário fornecer diversos valores positivos. O\
    programa deverá parar de solicitar valores quando o usuário fornecer um valor\
    negativo. Ao final, o programa deverá informar a soma dos valores lidos. Obs: o\
    valor negativo (último valor entrado) não deve entrar na conta da soma.")
    
    


    while(true){
        var value = prompt("Informe um valor positivo ")
        var x = value=+value
        console.log(x)
        if(value<0){
            console.log( x-value)
            break;
            
        }
               
        
    }
   


})

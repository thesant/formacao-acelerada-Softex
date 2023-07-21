var btn = document.getElementById('btn30');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que solicite ao usuário informar um valor positivo. O programa\
    deverá repetir a solicitação caso o usuário forneça um valor inválido (negativo).\
    Quando o usuário fornece um valor válido, mostre uma mensagem de texto\
    confirmando o valor entrado. Faça três versões desse programa, cada uma usando\
    uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas\
    é a mais adequada para este programa? Por que?")
    
    alert("Faça um programa que solicite ao usuário informar um valor positivo. O programa\
    deverá repetir a solicitação caso o usuário forneça um valor inválido (negativo).\
    Quando o usuário fornece um valor válido, mostre uma mensagem de texto\
    confirmando o valor entrado. Faça três versões desse programa, cada uma usando\
    uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas\
    é a mais adequada para este programa? Por que?")
    
    // Qual das três estruturas é a mais adequada para este programa? Por que?
        // Loop Whiele, uma vez que não temos uma valor estipulado, e devemos sempre aguardar um determinado valor para sair do Loop
        // caso contrario o programa deve continuar em execução

    let i = 0
    var valueP = prompt("Informe um valor positivo ")

    let option = prompt("Ecolha [1] para laco for;[2] para laco while;[3] para lado do while")

    if(option==1){
        console.log('Laço for');
        for(i;i<valueP;i++){
            valueP = prompt("Informe um valor positivo: (Digite um valor negativo para sair) ")
            console.log('============================================');
       
    }
    }
    
    if(option==2){
        console.log('Laço while');
        while(i<valueP){
            valueP = prompt("Informe um valor positivo: (Digite um valor negativo para sair) ")
            console.log('============================================');
    }
    
    }
    

    if(option==3){
        console.log('Laço do-while');
        do{
            valueP = prompt("Informe um valor positivo: (Digite um valor negativo para sair) ");
        }
        while (i<valuep);
        console.log('============================================');
    }
    

 



    console.log('')

})

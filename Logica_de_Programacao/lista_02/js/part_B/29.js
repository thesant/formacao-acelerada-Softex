var btn = document.getElementById('btn29');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que mostre na tela os números naturais entre 0 (zero) e 100.\
    Faça três versões desse programa, cada uma usando uma estrutura de repetição\
    diferente (for, while, do-while). Qual das três estruturas é a mais adequada para\
    este programa? Por que?")
    
    alert("Faça um programa que mostre na tela os números naturais entre 0 (zero) e 100.\
    Faça três versões desse programa, cada uma usando uma estrutura de repetição\
    diferente (for, while, do-while). Qual das três estruturas é a mais adequada para\
    este programa? Por que?")
    


    // Qual das três estruturas é a mais adequada para\
    // este programa? Por que? O laço for, pois sempre que ja sabemos o valor estabelecido devemos optar por o usao desse laço


    let wh = 0;
    let dow = 0;

    console.log('Laço for');
    for(i=0;i<100;i++)console.log(i+1);
    console.log('============================================');

    console.log('Laço while');
    while(wh<100)console.log(wh+=1);
    console.log('============================================');

    console.log('Laço do-while');
    do{
        console.log(dow+=1);
    }
    while (dow < 100);
    console.log('============================================');
})

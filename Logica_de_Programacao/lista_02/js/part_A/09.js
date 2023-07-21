var btn = document.getElementById('btn09');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa que leia um número e exiba o seu antecessor e sucessor usando\
    decremento (--)")
    let num = parseInt(prompt("Faça um programa que leia um número e exiba o seu antecessor e sucessor usando\
    decremento (--) \n\n Digite um valor inteiro: "))

    console.log('=======ANTECESSOR========')
    for(var i=num; i <= num; i--){
        console.log('#           '+i+'           #')
        if(i == num-num) break;
    }
    console.log('=======SUCESSOR=========')
    for(var i=num; i >= num; i++){
        console.log('#           '+i+'           #')
        if(i == num+num) break;
    }

})

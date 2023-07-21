var btn = document.getElementById('btn03');

btn.addEventListener('click', ()=>{
    console.log("3) Faça um programa que leia um valor inteiro e mostre este mesmo valor nas bases \
    hexadecimal, octal e o caractere correlacionado a esse inteiro.")

    var value =prompt('"3) Faça um programa que leia um valor inteiro e mostre este mesmo valor nas bases \
    hexadecimal, octal e o caractere correlacionado a esse inteiro. \n \n Digite um numero inteiro')
    var num = parseInt(value)
    var valor = 1
    var x = 1

    // Use parentheses when calling toString() directly
    const hex = parseInt(num).toString(16);
    const oct = parseInt(num).toString(8);
    console.log('Caracter digitado: '+value+'\nBase hexadecimal: ' + hex + '\nBase octal: ' + oct);
    console.log('Numeros Digitados :')
    while( x != 0){
        var x = Math.floor(num/valor%10)

        if(x == 0){
            break
        }else{
            console.log(x)
            valor = valor*10
        }    
            
    }
    

})



var btn = document.getElementById('btn07');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para ler uma temperatura em graus Celsius e mostrar seu valor \
    convertido para graus Fahrenheit e graus Kelvin.")

    let num = prompt("Faça um programa para ler uma temperatura em graus Celsius e mostrar seu valor \
    convertido para graus Fahrenheit e graus Kelvin. \n\n Digite o valor a ser convertido: ")
    
    var convertKelvin =  parseInt(num)- 273.15
    var convertFahrenheit = parseInt((num-32))/1.8

    console.log('Conversao........ \n' + 'Celsius para graus Fahrenheit : '+convertFahrenheit +'\nCelsius para graus Kelvin: ' +convertKelvin )

})

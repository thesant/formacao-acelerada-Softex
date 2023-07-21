var btn = document.getElementById('btn28');
btn.addEventListener('click',()=>{
    
    console.log("Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.\
    Escreva um programa que leia o total de horas normais e o total de horas extras\
    trabalhadas por um empregado em um ano e calcule o salário anual deste\
    trabalhador.")
    
    alert("Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.\
    Escreva um programa que leia o total de horas normais e o total de horas extras\
    trabalhadas por um empregado em um ano e calcule o salário anual deste\
    trabalhador.")
    

    var workedHours = prompt("Informe a quantidade de horas trabalhadas: ")
    
    var overtime = prompt("Informe a quantidade de horas extras: ")
    var valueFinal = (workedHours*10)+(overtime*15) * 360


    console.log('Seu salario anual sera: '+valueFinal)

})

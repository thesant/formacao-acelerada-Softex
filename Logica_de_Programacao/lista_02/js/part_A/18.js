var btn = document.getElementById('btn18');
btn.addEventListener('click',()=>{
    
    console.log(" Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que\
    solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida\
    que deverá ser paga, sabendo-se que são descontados 8% para pagamento de\
    impostos e taxas devidas.")
    
    alert(" Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que\
    solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida\
    que deverá ser paga, sabendo-se que são descontados 8% para pagamento de\
    impostos e taxas devidas.")

    let dayValue = 30

    let days = prompt("Digite a quantidade de dias trabalhados: ")
    var calcValueDays = days*dayValue
    var moneyFinal = calcValueDays-calcValueDays/100*8
    console.log("O valor a receber  e de: R$"+moneyFinal)
})

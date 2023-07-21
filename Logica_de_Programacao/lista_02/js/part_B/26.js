var btn = document.getElementById('btn26');
btn.addEventListener('click',()=>{
    
    console.log("Faça um programa para ler as dimensões de um terreno (comprimento e largura), o\
    preço do metro de arame e calcular o custo total para cercar o terreno. O programa\
    também deve informar quantos metros de cerca devem ser comprados.")
    
    alert("Faça um programa para ler as dimensões de um terreno (comprimento e largura), o\
    preço do metro de arame e calcular o custo total para cercar o terreno. O programa\
    também deve informar quantos metros de cerca devem ser comprados.")
    
    let c = prompt("Digite o valor do comprimento: ")
    let l = prompt("Digite o valor da largura: ")
    var wirePrice = prompt("Digite o preço do arame: ")

    var area = c*l

    var wirePriceFinal = area * wirePrice

    console.log('Custo total: '+ wirePriceFinal + '\nMetros de areame a ser comprado: '+area)

})

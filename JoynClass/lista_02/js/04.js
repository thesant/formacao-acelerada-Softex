var btn = document.getElementById('btn04')

btn.addEventListener('click', ()=>{
    console.log("4) Faça um programa que leia uma data no formato (dd/mm/aaaa) e mostre a data \
    fornecida no formato (aaaa/mm/dd).i. Dica: é possível especificar as barras no formato de entrada na função \
    scanf().")

    let date = prompt("4) Faça um programa que leia uma data no formato (dd/mm/aaaa) e mostre a data \
    fornecida no formato (aaaa/mm/dd).i. Dica: é possível especificar as barras no formato de entrada na função \
    scanf().\n \nDigite uma data no formato: (dd/mm/aaaa)")
    let dataEan = date.split('/').reverse().join('-');
    console.log('Data formatada: '+dataEan)
})

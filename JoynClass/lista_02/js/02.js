// Em JavaScript nao possuimos as funccoes getche() ou getch()
//por tanto nesse exemplo usarei apenas o prompt 
var btn = document.getElementById('btn02');
btn.addEventListener('click',()=>{
    console.log("2) Faça um programa capaz de ler um caractere (use a função getche() ou getch()), \
    informado pelo usuário, e mostrar o caractere escolhido pelo usuário.")

    var value=console.log(prompt('2) Faça um programa capaz de ler um caractere (use a função getche() ou getch()), \
    informado pelo usuário, e mostrar o caractere escolhido pelo usuário. \n \n(metodo prompt) Digite um caracter: '));
    console.log('#=============#=============#=============#=============#=============#=============#')
})

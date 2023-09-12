
const dadosMatriz = [
    ['Jose',19,1900,true],
    ['David',22,2500,false],
    ['Maria',25,3400,true],
    ['Igor',18,2100,false]
]


function mostrarMatriz(arr) {
    
    for(let i = 0; i <arr.length; i++){
          console.log(arr[i])
        }
    
}

mostrarMatriz(dadosMatriz)


/*

[ 'Jose', 19, 1900, true ]
[ 'David', 22, 2500, false ]
[ 'Maria', 25, 3400, true ]
[ 'Igor', 18, 2100, false ]

*/


const dados = [
    {'nome': 'Jose','idade':19,'salario': 1900, 'Tem ensino medio completo?': true},
    {'nome': 'David','idade':22,'salario': 2500, 'Tem ensino medio completo?': false},
    {'nome': 'Maria','idade':25,'salario': 3400, 'Tem ensino medio completo?': true},
    {'nome': 'Igor','idade':18,'salario': 2100, 'Tem ensino medio completo?': false},
]



console.table(dados)

/*

┌─────────┬─────────┬───────┬─────────┬────────────────────────────┐
│ (index) │  nome   │ idade │ salario │ Tem ensino medio completo? │
├─────────┼─────────┼───────┼─────────┼────────────────────────────┤
│    0    │ 'Jose'  │  19   │  1900   │            true            │
│    1    │ 'David' │  22   │  2500   │           false            │
│    2    │ 'Maria' │  25   │  3400   │            true            │
│    3    │ 'Igor'  │  18   │  2100   │           false            │
└─────────┴─────────┴───────┴─────────┴────────────────────────────┘

*/
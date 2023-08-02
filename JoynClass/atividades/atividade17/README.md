# INSTRUÇÕES DO PROJETO

*Você deve criar três listas em JavaScript:*

- 1. para guardar os nomes de dez pessoas;
- 2. para guardar as suas idades;
- 3. para guardar as suas cores favoritas.

*Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.* 





## Resolução:

  


  **codigo fonte:**

        let nomes = new Array(10);
        nomes = ['Ana','Chris','Fernanda',"Soraya",
                      'Wellington','Lindemberg','Park Jimin',
                      'Alessandro', 'Richardson','John'
                     ];
    
        let idades = [18,22,33,44,55,18,25,23,35,70];
        let cores = ['Azul','Amarelo','Verde','Roxo',
                      'Rosa', 'Preto','Branco','Azul','Verde','Vermelho'
                     ];


        for(let i = 0; i <= nomes.length; i++){
        console.log('Nome: '+nomes[i]+' Idade: '+idades[i]+' Cor: '+cores[i]);
          console.log('--------------------------------------')
        }
    
        nomes.splice(0,1,'MARIA')
        idades.splice(0,1,55)
        cores.splice(0,1,'VERDE')
        console.log('\n==========MODIFICAÇÕES=============\n')
    
        for(let i = 0; i < nomes.length; i++){
        console.log('Nome: '+nomes[i]+' Idade: '+idades[i]+' Cor: '+cores[i]);
          console.log('--------------------------------------')
        }

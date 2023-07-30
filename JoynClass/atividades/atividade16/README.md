# INSTRUÇÕES DO PROJETO

Desenvolva um código que simule uma eleição com três candidatos.

\- candidato_X => 889

\- candidato_Y => 847

\- candidato_Z => 515

\- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 





## Resolução:

  


  **codigo fonte:**

        const Candidatos = {
      candidato_X : 'candidato X',
      candidato_Y : 'candidato Y',
      candidato_Z : 'candidato Z'
    };
    let resultado =[{name:'Candidato X', votos: 0},
                    {name:'Candidato Y',votos: 0},
                    {name:'Candidato Z',votos:0},
                    {name:'Brancos/Nulos',votos: 0}
                    ];
    let check = true
    let duvida;
    let candidato;
    
    console.log('    Eleição 2023')
    console.log('----------------------\n')
    console.log('Use o teclado númerico para digitar seu voto\n')
    
    while(check){
       candidato = parseInt(prompt('Infome seu voto'))
       switch(candidato){
         case 889:
           console.log('--------------------------------');
           console.log('voto computado para:', Candidatos.candidato_X);
           console.log('--------------------------------');
           resultado[0].votos+=1;
           duvida  = prompt('Deseja continuar votando? [sim] [nao]')
           if(duvida == 'nao'){
             check = false;
             break;
           }else if(duvida == 'sim'){
             break;
           }  
        case 847:
           console.log('--------------------------------');
           console.log('voto computado para:', Candidatos.candidato_Y);
           console.log('--------------------------------');
           resultado[1].votos+=1;
           duvida  = prompt('Deseja continuar votando? [sim] [nao]')
           if(duvida == 'nao'){
             check = false;
             break;
           }else if(duvida == 'sim'){
             break;
           }  
        case 515:
           console.log('--------------------------------');
           console.log('voto computado para:', Candidatos.candidato_Z);
           console.log('--------------------------------');
           resultado[2].votos+=1;
           duvida  = prompt('Deseja continuar votando? [sim] [nao]')
           if(duvida == 'nao'){
             check = false;
             break;
           }else if(duvida == 'sim'){
              break;
           }  
        default:
        resultado[3].votos+=1;
            console.log('Valor incorreto. Vote novamente!');
    
       }
    }
    
    console.log('\nVotos recebidos')
    const pegaVencedor = resultado.reduce(function(prev, current) {
        return (prev.votos > current.votos) ? prev : current
    })
    
    console.log(resultado)
    console.log('\nO vencedor:\n')
    console.log(pegaVencedor)

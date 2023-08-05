---
title: 'DESAFIO:'
created: '2023-07-29T00:39:42.404Z'
modified: '2023-08-05T22:34:04.056Z'
---

# DESAFIO:

*Considere o array [3, 7, 9, 1, 0].*

**O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.*

*Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?*




## Codigo:


  - PILHA => [0,1,9,7,3] LIFO (Last in, first out) 

        console.log(pilha.pop()); // 3
        console.log(pilha.pop()); // 7
        console.log(pilha.pop()); // 9
        console.log(pilha.pop()); // 1
        console.log(pilha.pop()); // 0


  - LISTA => [3,7,9,1,0] /*As listas são estruturas de dados  que permitem o acesso aos elementos em qualquer ordem*/
        
        lista.push(8);

        console.log(lista); // [3,7,9,1,0,8]

        lista.pop();
        

        console.log(lista); // [0, 1, 9, 7, 3]



  - FILA =>  [3,7,9,1,0] FIFO (First in, first out)

        console.log(fila.shift()); // 3
        console.log(fila.shift()); // 7
        console.log(fila.shift()); // 9
        console.log(fila.shift()); // 1
        console.log(fila.shift()); // 0

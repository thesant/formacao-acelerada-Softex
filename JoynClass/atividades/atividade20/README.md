# Desafio

*Crie uma lista encadeada em que cada elemento representa uma pessoa.*
*Ela precisa conter informações como nome, idade e referência ao filho dela.*


class Pessoa{
  constructor(nome,idade, filho){
    this.nome = nome;
    this.idade = idade;
    this.filho = filho
  }

}
class Lista{
  constructor(){
    this.cabeca = null;
    this.calda = null;
  }

    /*adiciona uma nova pessoa a lista . O metodo recebe
     uma pessoa como parametro e adiciona a pessoa a lista.  primeiro
     cria um novo no que contem a pessoa. Em seguida, o metodo verifica se a lista esta vazia vazia.
     Se estiver, o metodo define o no como cabeca e o rabo da lista. Se a
     lista nao estiver vazia, o metodo define o no como o proximo no do rabo da lista e, em
     seguida, define o rabo da lista como o no.*/

adiciona(pessoa){
let no = new Pessoa(pessoa.nome, pessoa.idade,pessoa.filho);
if(!this.cabeca){   //verifica se o valor e nulo
  this.cabeca = no;
  this.calda = no;
}else{
  this.calda.next=no;
  this.calda = no;
}
}


      /*
      recebe o nome de uma pessoa como parametro e remove a pessoa da lista.

      */
  remove(nome){
      if(!this.cabeca){ //verifica se a lista está vazia
          return null;
      }
      let noAtual= this.cabeca;
      if (noAtual.nome === nome){ //inicia no cabeçalho da lista e verifica se o nome da pessoa e igual ao nome do no atual
          this.cabeca = noAtual.next; //Se o nome da pessoa for igual ao nome do no atual,remove o no da lista e retorna o no
          return noAtual
      }
      while(noAtual.next){
          if(noAtual.next.nome === nome){
              const removeNo = noAtual.next;
              noAtual.next = removeNo.next;
              return removeNo;
          }
          noAtual = noAtual.next;
      }
      return null; //Se chegar ao fim da lista sem encontrar o no com o nome da pessoa, o metodo retorna null.
  }
  exibe(){ //exibe as pessoas na lista encadeada
      let noAtual = this.cabeca;
      while(noAtual){
          console.log(noAtual.nome);
          noAtual = noAtual.next;
      }
  }
}



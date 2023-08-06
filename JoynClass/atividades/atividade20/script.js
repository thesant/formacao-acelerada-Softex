/*
INSTRUÇÕES DO PROJETO
Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.
*/

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

  adiciona(pessoa){
    let no = new Pessoa(pessoa.nome, pessoa.idade,pessoa.filho);
    if(!this.cabeca){
      this.cabeca = no;
      this.calda = no;
    }else{
      this.calda.next=no;
      this.calda = no;
    }
  }

  remove(nome){
      if(!this.cabeca){
          return null;
      }
      let noAtual= this.cabeca;
      if (noAtual.nome === nome){
          this.cabeca = noAtual.next;
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
      return null;
  }
  exibe(){
      let noAtual = this.cabeca;
      while(noAtual){
          console.log(noAtual.nome);
          noAtual = noAtual.next;
      }
  }
}

const listaEncadeada = new Lista();
listaEncadeada.adiciona(new Pessoa("samuel",30, 'jose'));
listaEncadeada.adiciona(new Pessoa("Jane Doe", 25, new Pessoa("John Jr.", 5, null)));
listaEncadeada.exibe();

const removeNo = listaEncadeada.remove("samuel");
console.log(removeNo.nome);
listaEncadeada.exibe()
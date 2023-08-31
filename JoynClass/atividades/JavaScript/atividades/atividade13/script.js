
const pessoas = [
    {
    nome:'Samuel',
    idade: 27,
    profissao: 'Developer',
    cidade: 'Natal'
    },
    {
        nome:'Antonio',
        idade: 55,
        profissao: 'Engenheiro Civil',
        cidade: 'Parnamirim'
    },
    {
        nome:'Angela',
        idade: 45,
        profissao: 'Professora',
        cidade: 'Sao Paulo'
    },
    {
      nome:'Maria',
      idade: 30,
      profissao: 'Enfermeira',
      cidade: 'So Paulo'
    },

]

for (const dado of pessoas){
    console.log(dado)    

}


for (const dado in pessoas) {
    console.log(`${dado}: Nome: ${pessoas[dado].nome}`);
    console.log(`${dado}: Idade: ${pessoas[dado].idade}`);
    console.log(`${dado}: Profissao: ${pessoas[dado].profissao}`);
    console.log(`${dado}: Cidade: ${pessoas[dado].cidade}`);
    console.log('--------------');
  }



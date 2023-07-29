/*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
 A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).
Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*/

let name = prompt('Informe seu nome: ');
alert('So serao permitidos ano de nascimento entre 1922 a 2021');
let date = prompt('Informe ano de nascimento: ');

function dateBirthday(date,name){
    if(date >= parseInt(1922) && date <= parseInt(2021)){ //verifica se a data esta entre os anos 1922 e 2021
        let calcAge = parseInt(2022)-date
        console.log(' Nome: '+name+'\n Idade:' +calcAge+' anos de idade');
        
    }else{
        throw new Error('Data fora do range permitido') // caso esteja fora do range e gerado um erro exclusivo
    }
}

try { //tratamento de erro
    console.log(dateBirthday(date, name))
  } catch (err) {
    console.log(err.message)
    //Data fora do range permitido
  }
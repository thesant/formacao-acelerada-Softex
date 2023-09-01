# DESAFIO:

*Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).*

*Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.*


## Codigo:

    let valueName = prompt('Informe seu nome:');
    let valueData;
    
    alert('\nSo serao permitidos anos  entre 1922 a 2021');
    console.log('--------------------------------------------\n')
    
    function dateBirthday(name) {
      while (true) {
    
        valueData = parseInt(prompt('Informe ano de nascimento: '));
        try {
          if (isNaN(valueData)) throw `Not a valid number`;
          if (valueData < 1922 || valueData > 2021) throw `Date outside the allowed range`;
          break;
        }
        catch (error) {
          console.error(error);
        }
      }
      let calcAge = parseInt(2022) - valueData
      console.log(' Nome: ' + name + '\n Idade: ' + calcAge + ' anos');
    }
    dateBirthday(valueName)

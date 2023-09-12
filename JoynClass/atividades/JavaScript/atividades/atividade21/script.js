const arrayPrimario = [23, 9, 4, 45];
const arraySegundario = [7, 12];

const div = arrayPrimario.length / 2; //pega metade do array

const arrayPartOne = arrayPrimario.slice(0, div);//fatia o array apartir da do indice zero, ate  o valor da const 'div'
const arrayPartTwo = arrayPrimario.slice(div);//fatia o array apratir do indice do valor da const 'div'

arraySegundario.push(...arrayPartOne); //uso do spread para 'espalhar' o valor do arrayPartOne no arraySegundario
console.log(arraySegundario); //[ 7, 12, 23, 9 ]

arraySegundario.push(...arrayPartTwo); //uso do spread para 'espalhar' o valor do arrayPartTwo no arraySegundario
console.log(arraySegundario); //[ 7, 12, 23, 9, 4, 45 ]
const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

const busca = 20;

let i = 0;

while (i < array.length) {
  if (array[i] === busca) {
    console.log(`valor: ${busca}  Posicao no array:  ${i}`);
    break;
  }
  i++;
}

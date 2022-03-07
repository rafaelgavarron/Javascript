const peso1 = 1.0;
const peso2 = Number("2"); // number é uma função  

console.log(peso1, peso2);
console.log(Number.isInteger(peso2)); //verifica se é numero inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;

const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //tofixed é para limitar o numero de casas decimais mostradas no console
console.log(media.toString(2)); //converte em binario (o media antes do ponto é o nome da variavel)
console.log(typeof media);
console.log(typeof Number);
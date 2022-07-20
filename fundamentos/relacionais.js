console.log((a = 1)); // '=' atribuição
console.log('01)', '1' == 1);
// '==' comparação entre valores
console.log('02)', '1' === 1);
// '===' comparação incluindo tipo
console.log('03)', '3' != 3);
// '!=' se valor a é diferente de valor b
console.log('04)', '3' !== 3);
// '!=='se valor é estritamente diferente (no caso é pq um é string o outro é tipo)

console.log('05)', 3 < 2);
// menor que
console.log('06)', 3 > 2);
// maior que
console.log('07)', 3 <= 2);
// menor ou igual
console.log('08)', 3 >= 2);
// maior ou igual

const d1 = new Date(0);
//0 é a data referência do javascript: 01/01/1970
const d2 = new Date(0);
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
// da diferente pq ele consulta o endereço de memoria
console.log('11)', d1.getTime() === d2.getTime());
console.log('12)', undefined == null);
// true
console.log('13)', undefined === null);
//retorna false

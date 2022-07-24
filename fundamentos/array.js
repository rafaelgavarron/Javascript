const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]); // ele sempre começa a contar do 0
console.log(valores[4]);

valores[4] = 10; // adiciona o valor 10 ao array 4
console.log(valores); // printa os valores no total
console.log(valores.length); // mostra quantos valores tem o array

valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);
console.log(typeof valores);

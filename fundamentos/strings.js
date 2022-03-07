const escola = "coder";

console.log(escola.charAt(4)); 
//serve para printar o indice 4 da cadeia de caracteres da variavel escola
console.log(escola.charAt(7));
//retorna em branco pq nn existe
console.log(escola.charCodeAt(3));
//char 3 na tabela ascii ou unicode
console.log(escola.indexOf("e"));
//localiza onde esta a letra 'e'
console.log(escola.substring(1));
//printa a partir do id 1, no caso a partir do o
console.log(escola.substring(0, 3));
//aqui printa a partir do id 0 'c' e com um fim (no caso 'd')
console.log("Escola ".concat(escola).concat("!"));
//aqui é uma função que concatena as coisas
console.log('Escola ' + escola + '!');
//aqui faz a mesmoa coisa
console.log(escola.replace("e",'q'));
//aqui substitui a letra 'e' pela letra 'q'
console.log('Ana,Maria,Pedro'.split(','));
//aqui ele quebra as strings pela virgula (definido pelo termo .split)
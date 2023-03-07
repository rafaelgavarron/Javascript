const notas = [6.7, 7.4, 9.8, 8.1, 7.7]; //array começa pelo indice 0

for (let i in notas) {
  console.log(i, notas[i]); //indices com o array
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`); // ele tá percorrendo o objeto
}

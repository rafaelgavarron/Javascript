console.log(Math.ceil(6.1)); //arredonda, use ceil pra cima, floor pra baixo
//ceil é uma função dentro de Math
const obj = {};
obj.nome = 'bola';
//obj['nome'] = 'bola2';//faz a mesma coisa
console.log(obj.nome);

function Obj(nome) {
  this.nome = nome; // vai retornar o parametro da função
  this.exec = function () {
    console.log('exec');
  };
}
const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');
console.log(obj2.nome); // cadeira
console.log(obj3.nome); // mesa
obj3.exec(); //exec

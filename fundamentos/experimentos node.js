let a = 3;
global.b = 123;
global.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(global.b);
console.log(global.c);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando uma variavel maluca ou seja, sem var e let
abc = 3; //não faça isso
console.log(global.abc);

//module.exports = { d: false, e: 'teste' };

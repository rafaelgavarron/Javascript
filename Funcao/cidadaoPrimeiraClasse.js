//Função em JS é First-Class Object(citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//Armazenar em uma variável
const fun2 = function () {};

//Armazenar em um Array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3));

//Armazenar dentro de atributos e objetos
const obj = {};
obj.falar = function () {
  return 'opa';
};
console.log(obj.falar());

//passar função como parametro pra outra
function run(fun) {
  fun(); //toda vez que precisar chamar uma função tem que usar o parenteses
}

run(function () {
  console.log('Executando...');
});

//Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(1, 2)(3);
//outra foma de armazenar, dessa vez usando variavel
const UmMais = soma(1, 2);
UmMais(3);

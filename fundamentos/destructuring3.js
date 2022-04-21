function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
  //função de valor aleatoria min 0 max 1000
}
const obj = { min: 1000, max: 1500 }; //aqui ele substitui o valor global
console.log(rand(obj));
console.log(rand({ min: 955 })); //o maximo vai pegar 1000 pq ja ta setado
console.log(rand({})); // vai usar o valor global

//sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(2, 3); //printa a soma de acordo com a função acima
imprimirSoma(2); //Not A Number pq não especificou o segundo
imprimirSoma(2, 10, 4, 5, 6, 7); // só os dois primeiros
imprimirSoma(!null, null); //!null transforma em 1

//função sem retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
//por mais que tenha só o a, ainda assim faz a conta pois o b ja esta setado

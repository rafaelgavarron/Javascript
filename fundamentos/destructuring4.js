function rand([min = 0, max = 1000]) {
  //valor padrão (min 0, max 1000)
  if (min > max) [min, max] = [max, min]; //aqui ele faz a troca caso esteja errado
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([50, 40])); //minimo e maximo estão invertidos, entao ele faz a troca
console.log(rand([992])); // minimo esse, maximo 1000
console.log(rand([, 10])); //aqui setou só o maximo
console.log(rand([])); //aqui ele deixa o padrão
//console.log(rand()); ->retorna como erro

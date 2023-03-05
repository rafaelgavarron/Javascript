function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min; //random gera entre 0 e 1, multiplicando dá um limite maior
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  /*se for falso ele nem entra*/ opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
}

console.log('até a Próxima!');

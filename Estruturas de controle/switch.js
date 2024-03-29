const imprimirResultado = function (nota) {
  switch (
    Math.floor(nota) //Math.floor arredonda pra baixo
  ) {
    case 10:
    case 9:
      console.log('Quadro de honr a');
      break;
    case 8:
    case 7:
      console.log('Aprovado');
      break;
    case 6:
    case 5:
    case 4:
      console.log('Recuperação');
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado');
      break;
    default:
      console.log('Nota inválida');
  }
};
imprimirResultado(10); //Quadro de honra
imprimirResultado(8.9); //Aprovado
imprimirResultado(6.55); //Recuperação
imprimirResultado(2.3); //Reprovado
imprimirResultado(-1); //Nota inválida

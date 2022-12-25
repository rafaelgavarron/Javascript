const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado!');
  } else {
    console.log('Reprovado!');
  }
};

imprimirResultado(12);
imprimirResultado(2);
imprimirResultado('Epa'); //reprovado //cuidado,linguagem fracamente tipada vai contar mesmo assim

function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('nossa,vc passou com ' + nota);
  }
}

soBoaNoticia(12);
soBoaNoticia(1);

function seforVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade... ' + valor);
  }
}

seforVerdadeEuFalo(); //o valor é undefined e undefined é falso
seforVerdadeEuFalo(null); //null tbm é falso
seforVerdadeEuFalo(undefined); //preciso nem falar né
seforVerdadeEuFalo(NaN); //not a number tbm é falso
seforVerdadeEuFalo(''); //string vazia tbm é falso
seforVerdadeEuFalo(0); //o unico numero q é falso
seforVerdadeEuFalo(-1); //ai ja é verdadeiro
seforVerdadeEuFalo(' '); //string preenchida mesmo com espaço é verdadeira
seforVerdadeEuFalo('?'); //verdadeiro
seforVerdadeEuFalo([]); //array vazio é verdadeiro
seforVerdadeEuFalo([1, 2]); //array com elementos tbm é vdd
seforVerdadeEuFalo({}); //objetos vazios tbm é vdd

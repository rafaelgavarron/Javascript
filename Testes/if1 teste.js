//teste: mostrar quem aprovou e quem reprovou
//por ex: 'joao reprovou com x', 'fulano foi aprovado por y'

function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('nossa,vc passou com ' + nota);
  } else {
    console.log('nossa vc reprovou com ' + nota <= 7);
  }
}

soBoaNoticia(12);
soBoaNoticia(1);

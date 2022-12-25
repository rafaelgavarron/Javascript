//teste: mostrar quem aprovou e quem reprovou
//por ex: 'joao reprovou com x', 'fulano foi aprovado por y'

const nota = {
  joao: 12,
  fulano: 2,
};

const { joao, fulano } = nota;

if (joao >= 6) {
  console.log('vc passou joao! Você tirou ' + joao);
}

/*const joao = {};
joao.nota = 12;

const fulano = {};
fulano.nota = 6;

if (joao.nota >= 7) {
  console.log('Joao, vc passou com ' + joao.nota);
}

if (fulano.nota >= 7) {
  console.log('parabeeeens, vc passou com ' + fulano.nota);
} else {
  console.log('vc reprovou bro, vc tirou ' + fulano.nota);
}
*/

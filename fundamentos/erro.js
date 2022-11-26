function tratarErroElancar(erro) {
  //throw new Error('vamo resolver !!!');
  //throw 10; // da pra colocar um numero tbm
  throw {
    //lança um erro
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    //caso dá erro tu usa isso
    console.log(obj.name.toUpperCase() + '!!! ');
  } catch (e) {
    //mostrar mensagem de erro para o usuario
    tratarErroElancar(e);
  } finally {
    console.log('final');
  }
}

const obj = { name: 'Roberto' };
imprimirNomeGritado(obj);

//par nome/valor
const saudacao = 'epa'; //contexto lexico

function exec() {
  const saudacao = 'olaaaa'; //contexto lexico 2
  return saudacao;
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua top',
    numero: 32,
  },
};
console.log(saudacao);
console.log(exec());
console.log(cliente);

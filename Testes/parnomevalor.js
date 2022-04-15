//par nome/valor
let saudacao1 = 'epa'; //contexto lexico

function exec() {
  const saudacao = 'olaaaa'; //contexto lexico 2
  return saudacao1;
  console.log(saudacao1); //puxou lá de cima
}
console.log(exec());

const nome = 'rebeca';
const concatenacao = 'ola ' + nome + '!';
const template = `
    Olá
    ${nome}!` 
// isso é o template string, suporta quebra de linha e concatena de forma mais simples
console.log(concatenacao,template);
//expressoes tbm dá:
console.log(`1 + 1 = ${1+1}`);
//aqui ele usa tudo como string exceto o que esta dentro das chaves
const up = texto => texto.toUpperCase()

console.log(`hey.... qualé ${up('abobado')}`);
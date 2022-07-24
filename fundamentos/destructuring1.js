//novo recurso do ES2015

const pessoa = {
  //pessoa = objeto
  nome: 'ana',
  idade: 5,
  endereco: {
    logradouro: 'rua top',
    numero: 32,
  },
};
const { nome, idade } = pessoa;
//tirou o atributo nome e idade do objeto pessoa
//os devidos atributos se tornaram variaveis do tipo const
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
//agora a 'variavel' nome se tornou n e a variavel idade se tornou 'i'
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // esse igual é pra falar qual objeto é
console.log(sobrenome, bemHumorada);
//tanto sobrenome quanto bemHumorada não foram definidas,porém
//no caso de de bemHumorada se não for definida
//converta para true(ou qqer outra coisa dps do igual)

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, cep, numero);

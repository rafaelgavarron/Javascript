let valor; //não inicializada
console.log(valor);

let valor1 = null;
console.log(valor1);
//console.log(valor1.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);
produto.preco = undefined; //evitar atribuir undefined
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço
console.log(!!produto.preco);
console.log(produto);

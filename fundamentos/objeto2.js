console.log(typeof Object);
console.log(typeof new Object()); //objeto

const cliente = function () {};
console.log(typeof cliente); //função
console.log(typeof new cliente());
//todo new é objeto

class produto {} //ES 2015 (ES6)
console.log(typeof produto);
console.log(typeof new produto());

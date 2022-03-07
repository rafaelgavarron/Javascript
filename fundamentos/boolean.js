let isAtivo = false
console.log(typeof isAtivo); // boolean

isAtivo = true;
console.log(isAtivo); //true (boolean)

isAtivo = 1; //number
console.log(typeof !isAtivo); 
// usando ponto de exclamação transforma para boolean, um para false, dois para true(o msm vale pra true ou false)
console.log('situações dupla exclamção que retornam falsos');
console.log(!!0);
console.log(!!''); // com espaço da true, sem espaço da false
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!(''|| null || 0 || null || NaN || undefined )); 
// TUDO false, porem se tiver um verdadeiro ele printa verdadeiro
console.log(!!(''|| null || 0 || null || NaN || undefined || 123));

let nome = 'lucas';
console.log(nome || 'Desconhecido')

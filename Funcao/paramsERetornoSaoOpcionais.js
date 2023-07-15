function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`valor acima do permitido: ${area}m².`);
  } else {
    return area;
  }
}
console.log(area(2, 2)); //4
console.log(area(2)); //NaN
console.log(area()); //NaN
console.log(area(2, 5)); // undefined
console.log(area(5, 5));

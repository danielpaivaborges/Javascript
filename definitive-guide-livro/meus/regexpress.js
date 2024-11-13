let texto = "testando: 1,2,3";
let padrao = /\d+/g;

console.log(padrao.test(texto));
console.log(texto.match(padrao));
console.log(texto.search(padrao));
console.log(texto.replace(padrao, "*"));
console.log(texto.split(padrao));

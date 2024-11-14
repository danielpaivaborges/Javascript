"use strict";
const matriz1 = [
  1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 80, 90, 100
];

const removerDuplicados = (matriz) => {
  return Array.from(new Set(matriz));
};

console.log(removerDuplicados(matriz1));

const contando = {};

for (let numero of matriz1) {
  if (contando[numero]) {
    contando[numero]++;
  } else {
    contando[numero] = 1;
  }
}

for (let chave in contando) {
  console.log(
    `O número ${chave} possui ${contando[chave]} ocorrências dentro do objeto.`
  );
}

//outra forma de iteração

let quantidadeNumeros = Object.entries(contando); //tambem e possivel usar object.keys e object.values
console.log(quantidadeNumeros);

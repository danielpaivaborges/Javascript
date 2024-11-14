"use strict";
const operacaoSet = (setA, setB) => {
  const uniao = new Set([...setA, ...setB]);
  const intersecao = new Set([...setA].filter((x) => setB.has(x)));
  return {
    uniao,
    intersecao
  };
};

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8, 9]);

const resultado = operacaoSet(set1, set2);
console.log(resultado);

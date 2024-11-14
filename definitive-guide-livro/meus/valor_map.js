"use strict";
const pegaValorPelaChave = (meuMap, key) => {
  if (meuMap.has(key)) {
    return meuMap.get(key);
  } else {
    return "chave não encontrada";
  }
};

const exemplo = new Map([
  ["nome", "daniel"],
  ["pais", "Brasil"],
  ["idade", 51]
]);

console.log(pegaValorPelaChave(exemplo, "idade"));

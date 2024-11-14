"use strict";
const logMap = (meuMap) => {
  for (let [key, value] of meuMap) {
    console.log(`${key} - ${value}`);
  }
};

const exemplo = new Map([
  ["nome", "daniel"],
  ["pais", "Brasil"],
  ["idade", 51]
]);

logMap(exemplo);

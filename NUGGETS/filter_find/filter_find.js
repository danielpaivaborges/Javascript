"use strict";
const pessoas = [
  { name: "daniel", age: 50, position: "programador" },
  { name: "arthur", age: 19, position: "programador" },
  { name: "Marilia", age: 80, position: "aposentada" },
  { name: "Jose Eustaquio", age: 80, position: "aposentado" }
];

//filter retorna um array de objetos ou um array vazio caso não encontre nada
const pessoasFiltradas = pessoas.filter((pessoa) => pessoa.age >= 100);
console.log(pessoasFiltradas);

//find  - sempre retorna apenas uma instancia do objeto, a primeira ou se não encontrar retorna undefined
const pessoasEncontradas = pessoas.find((pessoa) => pessoa.name === "daniel");
console.log(pessoasEncontradas);

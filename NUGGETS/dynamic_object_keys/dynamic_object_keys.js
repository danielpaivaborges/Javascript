"use strict";
const pessoa = {
  nome: "Daniel"
};
pessoa.idade = 50;

console.log(pessoa);

//aqui está o exemplo de chaves dinamicas
let appState = "loading";
const app = {
  [appState]: true
};
console.log(app);

//criando novas chaves no objeto
const keyName = "computador";
app[keyName] = "IBM";

console.log(app);

//exemplo útil
const state = {
  loading: true,
  name: "",
  job: ""
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "daniel paiva");
updateState("job", "programador");
updateState("loading", false);
console.log(state);
//tambem podemos criar novas chaves e valores
updateState("idade", 30);
console.log(state);

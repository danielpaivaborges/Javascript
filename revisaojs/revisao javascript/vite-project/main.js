//nullish coalescing operator
// const pessoa = {
//   nome: "Daniel",
//   idade: 50,
//   endereco: {
//     rua: "são paulo",
//     bairro: 'são geraldo',
//     cidade: "serra da saudade"
//   }
// }

// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa))
// console.log(Object.entries(pessoa));
// console.log(JSON.stringify(Object.entries(pessoa)));

// const { endereco } = pessoa
// console.log(endereco);
// console.log(JSON.stringify(endereco));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiro, segundo, terceiro, ...arroz] = numeros;
console.log(primeiro, segundo, arroz);

//saltando um numero
const [primeiro2, , terceiro2, ...resto2] = numeros;
console.log(primeiro2, terceiro2, resto2);

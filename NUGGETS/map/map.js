const pessoas = [
  { nome: "Luiz", idade: 19, profissao: "Programador" },
  { nome: "Pedro", idade: 35, profissao: "Padeiro" },
  { nome: "João", idade: 32, profissao: "Professor" },
  { nome: "Maria Abadia", idade: 53, profissao: "Advogada" },
  { nome: "Claudia", idade: 25, profissao: "Cabeleireira" }
];

const nomes = pessoas
  .map(({ nome }) => nome.toUpperCase())
  .sort((a,b)=> a.localeCompare(b));
console.log(nomes);


const nome = pessoas.map((pessoa)=>{
  return `<h1>${pessoa.nome}</h1>`
})

const resultado = document.querySelector('#resultado')
resultado.innerHTML = nome.join('')
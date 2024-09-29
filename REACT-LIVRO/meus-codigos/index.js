function meuNome(){
    return this.nome
}

const pessoa1 = { nome: "daniel", meuNome };
console.log(pessoa1.meuNome())
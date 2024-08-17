let saudacao = "Visitante";

const resposta = (nome) =>
  nome == null
    ? console.log("olá ", saudacao)
    : console.log("seja bem vindo ", nome);
    
resposta("Arthur");

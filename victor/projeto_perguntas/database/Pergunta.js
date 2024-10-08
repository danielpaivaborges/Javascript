const Sequelize = require("sequelize");
const conexao = require("./database");

const Pergunta = conexao.define("perguntas", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

//cria a tabela, caso ela não exista
Pergunta.sync({ force: false }).then(() =>
  console.log("tabela perguntas criada com sucesso.")
);

module.exports = Pergunta

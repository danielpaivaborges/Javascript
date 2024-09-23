const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  idPergunta: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Resposta.sync().then(()=>console.log("Tabela Respostas criada com sucesso..."))

module.exports = Resposta

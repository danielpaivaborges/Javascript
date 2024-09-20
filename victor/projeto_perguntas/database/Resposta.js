const Sequelize = require("sequelize");
const conexao = require("./database");

const Resposta = conexao.define("respostas", {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Resposta.sync({ force: false }).then(() =>
  console.log("tabela respostas criada com sucesso.")
);

module.exports = Resposta;

const Sequelize = require("sequelize");
const conexao = require("./database");

const Resposta = conexao.define("respostas", {
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  idPergunta: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Resposta.sync({ force: false }).then(() =>
  console.log("tabela respostas criada com sucesso.")
);

module.exports = Resposta;

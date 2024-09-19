const Sequelize = require("sequelize");

const conexao = new Sequelize("everos", "everos", "root2024", {
  host: "mysql.everos.com.br",
  dialect: "mysql"
});

module.exports = conexao
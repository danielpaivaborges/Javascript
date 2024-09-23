const Sequelize = require("sequelize");
const connection = new Sequelize("everos", "everos", "root2024", {
  host: "mysql.everos.com.br",
  dialect: "mysql"
});

module.exports = connection;

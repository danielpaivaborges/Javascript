const Sequelize = require("sequelize");

const connection = new Sequelize("everos", "everos", "root2024", {
  host: "mysql.everos.com.br",
  dialect: "mysql",
  timezone: "-03:00"
});

module.exports = connection;

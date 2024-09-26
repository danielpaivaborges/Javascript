const Sequelize = require("sequelize");
const connection = require("../database/database");

const Category = connection.define("categories", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//lembrar de forçar a criação das duas tabelas
//Category.sync({force: true})

Category.sync({force: false})
module.exports = Category
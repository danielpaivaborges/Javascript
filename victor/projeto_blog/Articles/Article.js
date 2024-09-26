const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../Categories/Category')

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})


// Article.belongsTo(Category)
Category.hasMany(Article) 

//lembrar de atualizar as duas tabelas
//Article.sync({force: true})

Article.sync({force: false})

module.exports = Article

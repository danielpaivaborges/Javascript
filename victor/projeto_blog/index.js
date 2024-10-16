const express = require("express");
const port = 21005;
const connection = require("./database/database");
const categoriesController = require("./Categories/CategoriesController");
const articlesController = require("./Articles/ArticlesController");
const Article = require("./Articles/Article");
const Category = require("./Categories/Category");

//CONFIGURANDO O APLICATIVO
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(categoriesController);
app.use(articlesController);

//conectando ao banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Banco de dados conectado com sucesso...");
  })
  .catch((error) => {
    console.log("houve um erro na conexão: ", error);
  });

//CRIANDO AS ROTAS
//rota principal
app.get("/", (req, res) => {
  Article.findAll({
    include: [{ model: Category }],
    order: [["id", "DESC"]]
  }).then((articles) => {
    Category.findAll().then((categories) => {
      res.render("index", { articles: articles, categories: categories });
    });
  });
});

app.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  Article.findOne({ where: { slug: slug } })
    .then((article) => {
      if (article != undefined) {
        Category.findAll().then((categories) => {
          res.render("article", { article: article, categories: categories });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch(() => {
      res.redirect("/");
    });
});

app.get("/category/:slug", (req, res) => {
  const slug = req.params.slug;
  Category.findOne({
    where: {
      slug: slug
    },
    include: [{ model: Article }],
    
  })
    .then((category) => {
      if (category != undefined) {
        Category.findAll().then((categories) => {        
          res.render("index", {
            articles: category.articles.reverse(),
            categories: categories
          });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch(() => {
      res.redirect("/");
    });
});

//iniciando o servidor
app.listen(port, () => {
  console.log("Servidor iniciado com sucesso na porta: ", port);
});

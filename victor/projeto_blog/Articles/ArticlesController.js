const express = require("express");
const router = express.Router();
const Category = require("../Categories/Category");
const Article = require("./Article");
const slugify = require("slugify");

router.get("/admin/articles", (req, res) => {
  Article.findAll({ include: [{ model: Category }] }).then((artigos) => {
    res.render("admin/articles", { artigos: artigos });
  });
});

router.get("/admin/articles/new", (req, res) => {
  Category.findAll().then((categories) => {
    res.render("admin/articles/new", { categories: categories });
  });
});

//salvando o artigo
router.post("/articles/save", (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const category = req.body.category;
  Article.create({
    title: title,
    slug: slugify(title),
    body: body,
    categoryId: category
  }).then(() => {
    res.redirect("/admin/articles");
  });
});

//deletando um artigo
router.post("/articles/delete", (req, res) => {
  const id = req.body.id;
  if (id != undefined) {
    if (!isNaN(id)) {
      Article.destroy({ where: { id: id } }).then(() =>
        res.redirect("/admin/articles")
      );
    } else {
      res.redirect("/admin/articles");
    }
  } else {
    req.redirect("/admin/articles");
  }
});

//editando artigo
router.get("/admin/articles/edit/:id", (req, res) => {
  const id = req.params.id;
  Article.findByPk(id)
    .then((article) => {
      if (article != undefined) {
        Category.findAll().then((categories) => {
          res.render("admin/articles/edit", {
            categories: categories,
            article: article
          });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch(() => res.redirect("/"));
});

//update
router.post("/articles/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const body = req.body.body;
  const category = req.body.category;

  Article.update(
    {
      title: title,
      body: body,
      categoryId: category,
      slug: slugify(title)
    },
    {
      where: {
        id: id
      }
    }
  )
    .then(() => {
      res.redirect("/admin/articles");
    })
    .catch(() => {
      res.redirect("/");
    });
});

//paginação
router.get("/articles/page/:num", (req, res) => {
  const page = req.params.num;
  let offset = 0;

  if (isNaN(page) || page == 1) {
    offset = 0;
  } else {
    offset = (parseInt(page)-1) * 2;
  }

  Article.findAndCountAll({
    limit: 4,
    offset: offset,
    order: [["id", "DESC"]]
  }).then((articles) => {
    let next = offset + 4 < articles.count;
    let result = {
      page: parseInt(page),
      next: next,
      articles: articles
    };
    Category.findAll().then((categories) => {
      res.render("admin/articles/page", {
        result: result,
        categories: categories
      });
    });
  });
});

module.exports = router;

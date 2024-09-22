const express = require("express");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");
const port = 21005;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//conectando o banco de dados
connection.authenticate().then((error) => {
  if (!error) {
    console.log("Banco de dados conectado com sucesso...");
  }
});

app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    res.status(200).render("index", { perguntas: perguntas });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({ titulo: titulo, descricao: descricao }).then(
    res.redirect("/")
  );
});

app.get("/pergunta/:id", (req, res) => {
  let id = req.params.id;
  Pergunta.findByPk(id).then((pergunta) => {
    Resposta.findAll({
      where: {
        idPergunta: id
      }
    }).then((respostas) => {
      res.render('pergunta', {pergunta: pergunta, respostas: respostas})
    });
  });
});

app.post("/salvarresposta", (req, res) => {
  let descricao = req.body.descricao;
  let id = req.body.idpergunta;
  if(descricao != undefined && descricao != ""){
    Resposta.create({ idPergunta: id, descricao: descricao }).then(
        res.redirect("/")
      );
  }else{
    res.redirect("/pergunta/" + id);
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Servidor iniciado com sucesso na porta: ", port);
  }
});

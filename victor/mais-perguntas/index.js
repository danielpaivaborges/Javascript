const express = require("express");
const port = 21005;
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

//configurar o aplicativo
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//iniciar a conexão com o banco de dados
connection.authenticate().then((error) => {
  if (!error) {
    console.log("Banco de dados conectado com sucesso...");
  }
});

//configurar rotas
//rota principal
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    Resposta.findAll().then((respostas)=>{
      res.render("index", { perguntas: perguntas, respostas: respostas });
    })
  });
});

//rota perguntar
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

//rota para salvar pergunta
app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  if (
    titulo != undefined &&
    titulo != "" &&
    descricao != undefined &&
    descricao != ""
  ) {
    Pergunta.create({ titulo: titulo, descricao: descricao }).then(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/perguntar");
  }
});

//rota para mostrar a pergunta
app.get("/pergunta/:id", (req, res) => {
  let id = req.params.id;
  Pergunta.findByPk(id).then((pergunta) => {
    if (pergunta) {
      Resposta.findAll({ where: { idPergunta: id } }).then((respostas) => {
        res.render("pergunta", { pergunta: pergunta, respostas: respostas });
      });
    } else {
      res.redirect("/");
    }
  });
});

//rota para salvar resposta
app.post("/salvarresposta", (req, res) => {
  let id = req.body.id;
  let descricao = req.body.descricao;
  if (descricao) {
    Resposta.create({ descricao: descricao, idPergunta: id }).then(() =>
      res.redirect(`/pergunta/${id}`)
    );
  } else {
    res.redirect(`/pergunta/${id}`);
  }
});

//apagar resposta
app.get('/apagar/:id', (req, res)=>{
  let id = req.params.id
  Resposta.destroy({where: {
    id: id
  }}).then(()=> res.redirect('/')) 
})

//configurar o servidor
app.listen(port, (error) => {
  if (!error) {
    console.log("O servidor foi iniciado com sucesso na porta: ", port);
  }
});

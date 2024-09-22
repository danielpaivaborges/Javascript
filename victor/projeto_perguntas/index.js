//importando as dependências
const express = require("express");
//definindo a porta do servidor
const porta = 21005;
const conexao = require("./database/database.js");
const Pergunta = require("./database/Pergunta.js");
const Resposta = require("./database/Resposta.js");

//configurando o aplicativo
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//iniciando a conexão com o banco de dados
conexao
  .authenticate()
  .then(() => console.log("Banco de dados conectado com sucesso...."))
  .catch((error) => {
    console.log(`Ocorreu um erro durante a conexão: ${error}`);
  });

//definindo as rotas
//rota principal
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    res.render("index", { perguntas: perguntas });
  });
});
//rota perguntas
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});
//rota virtual para salvar a pergunta
app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  //criando o registro na tabela
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  })
    .then(() => res.redirect("/"))
    .catch((error) => {
      console.log(`Ocorreu um erro: ${error}`);
    });
});

app.get("/alert", (req, res) => {
  res.render("alert");
});

//rota para pergunta unica
app.get("/pergunta/:id", (req, res) => {
  let id = req.params.id;
  Pergunta.findOne({ where: { id: id } }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({ where: { idPergunta: pergunta.id } }).then(
        (respostas) => {
          res.render("pergunta", {
            pergunta: pergunta,
            id: id,
            respostas: respostas
          });
        }
      );
    } else {
      res.redirect("/alert");
    }
  });
});

//rota para resposta
app.post("/responder", (req, res) => {
  let id = req.body.idpergunta;
  let corpo = req.body.corpo;
  if(corpo != undefined && corpo != '' ){
    Resposta.create({ idPergunta: id, corpo: corpo }).then(
      res.redirect(`/pergunta/${id}`)
    );
  }
});

//iniciando o servidor
app.listen(porta, (error) => {
  if (!error) {
    console.log(`Servidor rodando na porta ${porta}`);
  }
});

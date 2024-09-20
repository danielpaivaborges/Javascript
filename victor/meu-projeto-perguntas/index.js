//importando o express para gerenciar o servidor
const express = require("express");
//definindo a porta onde o servidor vai rodar
const PORT = 21005;
//importar conexão
const connection = require("./database/database");
//importar model Pergunta
const Pergunta = require("./database/Pergunta");
//importar model Resposta
const Resposta = require("./database/Resposta");

//configurando o programa
const app = express();
//definindo a máquina de renderização para o EJS
app.set("view engine", "ejs");
//usando a pasta para arquivo estáticos
app.use(express.static("public"));
//configurando os interpretadores de dados de frontend
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//conectando ao banco de dados
connection.authenticate().then((error) => {
  if (!error) {
    console.log("Conexão ao Banco de Dados efetuada com sucesso...");
  } else {
    console.log("Houve um erro na conexão com o banco de dados: ", error);
  }
});

//rota padrão
app.get("/", (req, res) => {
  Pergunta.findAll({ order: [["id", "DESC"]] }).then((perguntas) => {
    res.render("index", { perguntas: perguntas });
  });
});

//rota da página de pergunta
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

//rota para salvar a pergunta
app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({ titulo: titulo, descricao: descricao }).then(() => {
    res.redirect("/");
  });
});

//rota da página de respostas
app.get("/responder/:id", (req, res) => {
  let id = req.params.id;
  Pergunta.findOne({ where: { id: id } }).then((pergunta) => {
    Resposta.findAll({where:{idPergunta: id}}).then((respostas)=>{
        res.render("responder", { pergunta: pergunta, respostas: respostas });
    })    
  });
});

app.post("/salvarresposta",(req, res)=>{
    let descricao = req.body.descricao
    let idpergunta = req.body.idpergunta
    Resposta.create({descricao: descricao, idPergunta: idpergunta}).then(()=>{
        res.redirect('/')
    })
})

//configurar o servidor
app.listen(PORT, (error) => {
  if (!error) {
    console.log("Servidor iniciado com sucesso na porta: ", PORT);
  } else {
    console.log("Ocorreu um erro ao iniciar o servidor: ", error);
  }
});

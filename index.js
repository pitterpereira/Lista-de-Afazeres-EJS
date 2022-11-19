const express = require("express");
const app = express();
const data = require(__dirname + "/date.js");

app.set('view engine', 'ejs');

// Parser
app.use(express.urlencoded({ extended: true }));
// Criação de uma pasta para utilização de outros arquivos
app.use(express.static("public"));

// Lista de itens
let items = [];
let itemsDeTrabalho = [];

// Página inicial
app.get('/', function (req, res) {

    // Pega a informação do módulo criado
    let hoje = data.getData();

    res.render("lista", { tituloLista: hoje, listaDeItens: items });
});

app.get('/trabalho', function (req, res) {

    res.render("lista", { tituloLista: "Lista de trabalho", listaDeItens: itemsDeTrabalho });
});

// Gestão do form e separação das listas
app.post('/', (req, res) => {

    if (req.body.adicionar === "Lista de trabalho") {
        itemsDeTrabalho.push(req.body.afazer);
        res.redirect("/trabalho");
    } else {
        items.push(req.body.afazer);
        res.redirect("/");
    }
});

app.listen(3000, function (err) {
    if (err)
        console.log("Erro no servidor!");

    console.log("Servidor ativado!");
});
const express = require("express");
const app = express();

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

    let hoje = new Date();

    let opcoes = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let data = hoje.toLocaleDateString("pt-BR", opcoes);

    res.render("lista", { tituloLista: data, listaDeItens: items });
});

app.get('/trabalho', function (req, res) {

    res.render("lista", { tituloLista: "Lista de trabalho", listaDeItens: itemsDeTrabalho });
});

// Gestão do form
app.post('/', (req, res) => {

    if(req.body.adicionar === List)
        items.push(req.body.afazer);
    
    res.redirect("/");
});

// Gestão do form
app.post('/trabalho', (req, res) => {

    if(req.body.adicionar)
        itemsDeTrabalho.push(req.body.afazer);
    else
        itemsDeTrabalho = [];
    
    res.redirect("/");
});

app.listen(3000, function (err) {
    if (err)
        console.log("Erro no servidor!");

    console.log("Servidor ativado!");
});
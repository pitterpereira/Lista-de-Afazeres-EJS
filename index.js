const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {

    var hoje = new Date();
    var mensagem;

    if(hoje.getDay() === 6 || hoje.getDay() === 0)
        mensagem = "Estamos no fim de semana! 😎";
    else
        mensagem = "Tenha um bom trabalho!! 👨‍💻"

    res.send(mensagem);
});

app.listen(3000, function(err){
    if(err)
        console.log("Erro no servidor!");

    console.log("Servidor ativado!");
});
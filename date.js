exports.getDay = function () {

    let hoje = new Date();

    let opcoes = {
        day: "numeric"
    };

    return data = hoje.toLocaleDateString("pt-BR", opcoes);
}

exports.getWeekDay = function () {

    let hoje = new Date();

    let opcoes = {
        weekday: "long"
    };

    return data = hoje.toLocaleDateString("pt-BR", opcoes);
}

exports.getData = function () {

    let hoje = new Date();

    let opcoes = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return data = hoje.toLocaleDateString("pt-BR", opcoes);
}
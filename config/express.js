var express = require('express');
var load    = require('express-load');
var bodyPaser = require('body-parser');
//var home    = require('../app/routes/home');

module.exports = function() {
    var app = express(); //Instanciamos o Express

    //configuração do ambiente
    app.set('port', 3000);

    //Midleware
    app.use(express.static('./public')); //Arquivos Estaticos
    app.use(bodyPaser.urlencoded({extended: true}));
    app.use(bodyPaser.json());
    app.use(require('method-override'));
    app.set('view engine', 'ejs'); //Template Engine
    app.set('views', './app/views'); //definições das Views

//Load das pastas via Express Load
    load('models', {verbose: true, cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};
var express = require('express');

module.exports = function() {
    var app = express();
    //configuração do ambiente
    app.set('port', 3000);

    //Midleware
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    return app;
};
module.exports = function(app) {
    var controller = app.controllers.home; //variável passada pelo Express Load

    app.get('/index', controller.index);
    app.get('/', controller.index);
};
var contatos = [
    {_id: 1, nome: 'Raí Siqueira', email: 'contato@raisiqueira.com'},
    {_id: 2, nome: 'Raí 2', email: 'rai93siqueira@gmail.com'}
];

module.exports = function() {
    var controller = {};
    controller.listaContatos = function(req, res){
        res.json(contatos);
    };

    return controller;
};
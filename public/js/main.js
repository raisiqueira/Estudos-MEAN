angular.module('mean', ['ngRoute'])
    .config(function($routeProvider) {

        $routeProvider.when('/contatos',{
            templateUrl: 'partials/contatos.html',
            controller: 'contatosController'
        });

        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'contatoController'
        });
    });
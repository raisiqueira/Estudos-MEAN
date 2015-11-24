angular.module('mean').controller('contatosController', function($scope) {
    $scope.total = 0;

    $scope.filtro = '';

    $scope.contatos = [
        {
            "_id": 1,
            "nome": "Raí Siqueira",
            "email": "contato@raisiqueira.com"
        },

        {
            "_id": 2,
            "nome": "Raí josé",
            "email": "rai93siqueira@gmail.com"
        }
    ];

    $scope.incrementa = function() {
        $scope.total++;
    };
});
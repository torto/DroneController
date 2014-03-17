var app = angular.module('AppController', ['fsCordova', 'ngRoute', 'menuInicial']);

app.controller('bodyController', function teste($scope, CordovaService, loadInicial) {
    CordovaService.ready.then(function() {
        loadInicial.carregar();

        $scope.nome = 'teste Angular';

    });

})
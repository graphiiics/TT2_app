(function () {
    'use strict';

    angular.module('RestauranteApp').controller('CategoriaCtrl', ['dataApi', CategoriaCtrl]);

    function CategoriaCtrl(dataApi, $scope) {
        var vm = this;
/*
         vm.goLista = function(tipo){
            console.log("tipo-->", tipo);

            $state.go("app.categoria", { id: tipo });

        };*/

    };
})();
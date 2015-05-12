(function () {
    'use strict';

    angular.module('RestauranteApp').controller('ListaCtrl', ['dataApi', ListaCtrl]);

    function ListaCtrl(dataApi) {
        var vm = this;
        
        var data = dataApi.getDB();
        console.log("Lista*",data);
        //vm.objetos = data.restaurantes;
        vm.objetos = data.restaurantes;

    };
})();
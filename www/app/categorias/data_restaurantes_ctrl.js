(function () {
    'use strict';

    angular.module('RestauranteApp').controller('DatosRestaurantesCtrl', ['$stateParams','dataApi', DatosRestaurantesCtrl]);

    function DatosRestaurantesCtrl($stateParams, dataApi) {
        var vm = this;

        
        
        //var data = dataApi.getDB();
        //vm.restaurantes = data.restaurantes;

        var idCate = String($stateParams.id);
        console.log("Categoria-->", idCate);
        
        /*dataApi.getRestaurantes().then(function(data){
            vm.restaurantes = data.restaurantes;
        });
/**/
        dataApi.getRestaurantes().then(function(data){
            console.log("Entre a la funcion de getRestaurantes()");
            vm.restaurantes =  _.filter(data.restaurantes, { "categoria": idCate });
            console.log("vm.restaurantes since of lista Categoria.js-->", vm.restaurantes );
        });

    };
})();

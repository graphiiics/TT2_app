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
            vm.restaurantes =  _.filter(data.restaurantes, { "restaurante_categoria": idCate });
            //console.log("vm.mexicana since of $http-->", vm.mexicana );
        });

    };
})();

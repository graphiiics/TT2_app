(function () {
    'use strict';

    angular.module('RestauranteApp').controller('Perfil_Restaurante_Ctrl', ['$stateParams', 'dataApi', '$scope' , Perfil_Restaurante_Ctrl]);

    function Perfil_Restaurante_Ctrl($stateParams, dataApi, $scope) {
        var vm = this;

        var rango;
        //var restauranteId = Number($stateParams.id);
        var restauranteId = $stateParams.id;
        console.log("El id del restaurante de la url es-->", restauranteId);

        dataApi.getRestaurantes().then(function(data){
            console.log("Entre a esta mmda");
            vm.restaurante = _.find(data.restaurantes, { "id": restauranteId });
            console.log("*vm.restaurante since of $http-->", vm.restaurante );
            rango = vm.restaurante.rango_precio;
           
        });

        dataApi.getDatosDestacadosRestaurante(restauranteId).then(function(data){
            vm.datos_destacados = data.datos_destacados;
            console.log("vm.datos_destacados since of $http-->", vm.datos_destacados );
        });

        $scope.getRangoDePrecio = function() {
            return new Array(rango);   
        }

    };
})();



(function () {
    'use strict';

    angular.module('RestauranteApp').controller('Perfil_Restaurante_Ctrl', ['$stateParams', 'dataApi', '$scope' , Perfil_Restaurante_Ctrl]);

    function Perfil_Restaurante_Ctrl($stateParams, dataApi, $scope) {
        var vm = this;

        var rango;
        var restauranteId = Number($stateParams.id);

        dataApi.getRestaurantes().then(function(data){
            vm.restaurante = _.find(data.restaurantes, { "id_restaurante": restauranteId });
            rango = vm.restaurante.restaurante_rango_precio;
            console.log("vm.restaurante since of $http-->", vm.restaurante );
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



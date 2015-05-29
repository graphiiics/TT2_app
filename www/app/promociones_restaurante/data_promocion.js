(function () {
    'use strict';

    angular.module('RestauranteApp')

    .controller('Promocion_Restaurante_Ctrl', ['$stateParams', 'dataApi', Promocion_Restaurante_Ctrl]);

    function Promocion_Restaurante_Ctrl($stateParams, dataApi) {
        var vm = this;

        var promocionId = Number($stateParams.id);
        vm.promocion_id = promocionId; 

        console.log("promocion id-->", promocionId);
        console.log("vm.promocion_id  -->", vm.promocion_id);


        dataApi.getPromocion(promocionId).then(function(data){
            vm.promocion = data.promocion;
            console.log("vm.promocion since of $http-->", vm.promocion );
            console.log("vm.promocion[0].promocionId since of $http-->", vm.promocion[0].id_promocion );
            vm.restaurante_id = vm.promocion[0].id_restaurante; 
            console.log("id_restaurante since of $http-->", vm.promocion[0].id_promocion );
        });




    };
})();

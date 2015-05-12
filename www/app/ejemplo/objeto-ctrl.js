(function () {
    'use strict';

    angular.module('RestauranteApp').controller('ObjetoCtrl', ['$stateParams', 'dataApi', ObjetoCtrl]);

    function ObjetoCtrl($stateParams, dataApi) {
        var vm = this;
        //console.log("Entre");
        //console.log("sta--->", $stateParams);

        var objetoId = Number($stateParams.id);
        console.log("objeto id--->", objetoId);

        var data = dataApi.getDB();
        //console.log("data", data);
        //console.log("data", data.restaurantes); 


        vm.restaurante = _.find(data.restaurantes, { "id_restaurante": objetoId });

        
        //vm.game = _.find(data.games, { "id": gameId });
        
        console.log("objeto restaurante--->", vm.restaurante);               

    };
})();



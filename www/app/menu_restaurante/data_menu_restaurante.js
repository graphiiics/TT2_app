(function () {
    'use strict';

    angular.module('RestauranteApp')

    .controller('Menu_Restaurante_Ctrl', ['$stateParams', 'dataApi', '$scope', '$ionicModal', Menu_Restaurante_Ctrl]);

    function Menu_Restaurante_Ctrl($stateParams, dataApi, $scope, $ionicModal) {
        var vm = this;

        var restauranteId = Number($stateParams.id);
        vm.restaurante_id = restauranteId; 

        console.log("Restaurante id-->", restauranteId);
        console.log("vm.restaurante_id  -->", vm.restaurante_id);


        dataApi.getImagenesMenuRestaurante(restauranteId).then(function(data){
            vm.imagenes_menu = data.imagenes_menu;
            console.log("vm.imagenes_menu since of $http-->", vm.imagenes_menu );
        });




        $scope.allImages = [
            { 'src' : 'img/mogi_menu_1.jpg' },
            { 'src' : 'img/mogi_menu_2.jpg' },
            { 'src' : 'img/mogi_menu_3.jpg' },
            { 'src' : 'img/mogi_menu_4.jpg' },
            { 'src' : 'img/mogi_menu_5.jpg' },
            { 'src' : 'img/mogi_menu_6.jpg' },
            //{ 'src' : 'img/ionic.png' },
            { 'src' : 'img/mogi_menu_7.jpg' }
        ];

        $scope.showImages = function(index) {
            $scope.activeSlide = index;
            $scope.showModal('app/menu_restaurante/visor_galeria_menu.html');
            console.log("Hasta aqui ando bien");
        }

        $scope.showModal = function(templateUrl) {
        console.log(templateUrl);
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
        }

        // Close the modal
        $scope.closeModal = function() {
            $scope.modal.hide();
            $scope.modal.remove()
        }

    };
})();



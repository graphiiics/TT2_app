// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('RestauranteApp', ['ionic', 'menuCtrl', 'perfilCtrl'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider

    //Menu lateral de configuración
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/menu_config/menu.html',
        controller: 'AppCtrl'
    })

    //Este no lo estoy usando [Eliminar]
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'app/perfil_restaurante/profile.html',
                controller: 'perfilCtrl'
            }
        }
    })

    //Plantilla para el perfil de cada restaurante
    .state('app.perfil', {
      url: '/perfil/:id',
      views: {
        'menuContent': {
                templateUrl: 'app/perfil_restaurante/perfil.html',
                controller: 'perfilCtrl'
            }
        }
    })

    //Elemento para pruebas [Eliminar]
    .state('app.sl', {
                  url: '/sl/:id',
            views: {
                'menuContent': {
                    templateUrl: 'app/ejemplo/objeto-ejemplo.html'
                }
            }
        })

    //Plantilla para las categorias (Buscar el controlador de los efectos)
    .state('app.categorias', {
        url: '/categorias',
        views: {
            'menuContent': {
                templateUrl: 'app/categorias/categorias_restaurantes.html'
            }
        }
    })

    //Plantilla de lista de restaurantes por categoria (Cambiar el nombre de la ruta)
    .state('app.ct', {
        url: '/ct/:id',
        views: {
            'menuContent': {
                templateUrl: 'app/categorias/lista_categoria.html',
                controller: 'ListaCtrl'
            }
        }
    })

    //Plantilla de pruebas [Eliminar]
    .state('app.lista', {
        url: '/lista',
        views: {
            'menuContent': {
                templateUrl: 'app/ejemplo/lista-ejemplo.html'
            }
        }
    })
    ;

    //La aplicacion iniciara en esta ruta
    $urlRouterProvider.otherwise('/app/categorias');
});
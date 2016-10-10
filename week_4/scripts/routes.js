(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'scripts/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'scripts/templates/categories.template.html',
    controller: 'CategoriesController as categCtrl',
    resolve: {
      menuCategories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
    // Items page
  .state('items', {
    url: '/items/{catShortName}',
    templateUrl: 'scripts/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      categoryItems: ['$stateParams','MenuDataService', 
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.catShortName);
      }]
    }
  });
  
}

})();
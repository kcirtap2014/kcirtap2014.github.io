(function (){
	'use strict';

	angular.module('data')
  .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig( $stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })
    
    .state('mainCategories',{
      url: '/main-categories',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: "MainCategoriesController as mainCategories",
      resolve:{
        categories : ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }   
    })

    .state('itemDetail',{
      url: '/items/{itemId}',
      templateUrl:'src/templates/main-items.template.html',
      controller: "ItemDetailController as itemDetail", 
      resolve:{
        items : ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    });

  }

})();

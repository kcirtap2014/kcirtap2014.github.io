(function (){
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService)
  .constant("APIBasePath","https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject=['$http', 'APIBasePath']
	function MenuDataService ($http, APIBasePath){
    var menu = this;
    menu.getAllCategories = function (){

      return $http({
        method: "GET",
        url:(APIBasePath + "/categories.json")
      })
    }
    
    menu.getItemsForCategory = function (categoryShortName){
      return $http({
        method: "GET",
        url:(APIBasePath + "/menu_items.json"),
        params:{
          category: categoryShortName
        } 
      })
    };
  }
})();

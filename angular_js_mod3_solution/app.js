(function(){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',  NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)

function FoundItemsDirective(){
	var ddo = {
		templateUrl: 'menuShow.html',
		scope: {
			items:'<',
			onRemove:'&'
		},
		controller:FoundItemsDirectiveController,
		controllerAs:'list',
		bindToController:true
	};

	return ddo;
}

function FoundItemsDirectiveController(){
	var list = this;

	list.onRemove= function(index){
		list.items.splice(index,1);
	};
}

NarrowItDownController.$inject = [ 'MenuSearchService'];
function NarrowItDownController( MenuSearchService){
	var menu = this;
	menu.searchTerm = "";
	
	menu.getMatchedMenuItems = function(){
  		var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm); 

  		promise.then(function(result){
  			menu.found = result;
  		})
  	};
}
	
MenuSearchService.$inject = ['$http', '$filter']
function MenuSearchService($http, $filter){
	var service = this;
	var FoundItems = [];
	service.getMatchedMenuItems = function (searchTerm){
		
		return $http({
			method: "GET",
			url:("https://davids-restaurant.herokuapp.com/menu_items.json"),
		}).then(function(response){
			var data = response.data;
			var items = data.menu_items;
			if (searchTerm!=""){
				for (var i=0; i<items.length; i++ ){
					var search = $filter('filter')(items[i].name.split(' ')
						, searchTerm);

					if (search!=0){
						FoundItems.push(items[i]);
					}		
				}
			}
			return FoundItems;
		});	
	};
}

})();

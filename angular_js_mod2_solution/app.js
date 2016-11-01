(function(){
'use strict';

angular.module('ShoppingListCheckOffApp',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
	var tobuy = this;
	var index = "tobuy";
	tobuy.items = ShoppingListCheckOffService.get_items(index)

	tobuy.remove_item = function(itemIndex){
		ShoppingListCheckOffService.remove_item(itemIndex);
	}

}

AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var alreadybought = this;
	var index = "alreadybought";
	alreadybought.items = ShoppingListCheckOffService.get_items(index)
	alreadybought.add_item = function(){
		ShoppingListCheckOffService.add_item(alreadybought.item_name, alreadybought.item_quantity);
	}

}

function ShoppingListCheckOffService(){
	var service = this;
	var tobuy_list=[
		{name:"Cookies",quantity:"5"},
		{name:"Oranges",quantity:"2"},
		{name:"Apples",quantity:"10"},
		{name:"Aubergine",quantity:"1"},
		{name:"Chocolat",quantity:"2"},
	];

	var alreadybought_list = [];

	service.add_item=function(iname,iquant){
		var item ={
			name:iname,
			quantity:iquant
			};
		alreadybought_list.push(item)
	};

	service.remove_item= function(item_Index){
		service.add_item(tobuy_list[item_Index].name, 
			tobuy_list[item_Index].quantity)
		tobuy_list.splice(item_Index,1);
	};

	service.get_items = function(index){
		var item;
		if (index==="tobuy"){
			item = tobuy_list;}
		else{
			item = alreadybought_list;}
		return item; 
	};

}

})();
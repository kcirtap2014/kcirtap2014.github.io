(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['MenuDataService','items'];

function ItemDetailController(MenuDataService, items) {
  var iD = this;
  iD.item = items.data;
  iD.menu = iD.item.menu_items;
}

})();

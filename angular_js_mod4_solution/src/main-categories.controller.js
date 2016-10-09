(function () {
'use strict';

angular.module('data')
.controller('MainCategoriesController', MainCategoriesController);

// Version with resolving to 1 item based on $stateParams in route config
MainCategoriesController.$inject = ['MenuDataService', 'categories'];
function MainCategoriesController(MenuDataService, categories) {
  var menu = this;
  menu.categories = categories;

}

})();

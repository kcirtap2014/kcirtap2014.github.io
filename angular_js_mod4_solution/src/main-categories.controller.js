(function () {
'use strict';

angular.module('data')
.controller('MainCategoriesController', MainCategoriesController);

// Version with resolving to 1 item based on $stateParams in route config
MainCategoriesController.$inject = [ 'categories'];
function MainCategoriesController( categories) {
  var menu = this;
  menu.categories = categories;

}

})();

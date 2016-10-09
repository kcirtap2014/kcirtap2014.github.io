(function (){
	'use strict';
	angular.module('data')
	.component('itemDetail', {
    templateUrl: 'src/templates/item-detail.template.html',
    bindings: {
    items: '<'
    }
  });
})();

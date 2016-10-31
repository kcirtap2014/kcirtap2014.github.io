(function(){
	'use strict';

	angular.module('common')
	.service('SignUpService', SignUpService)

	SignUpService.$inject=['$http', 'ApiPath']

	function SignUpService ($http, ApiPath){
		var signup = this;
		var info;

		signup.getItems = function (ShortName){
			return $http({
				method: "GET",
				url:(ApiPath+ "/menu_items/"+ ShortName+".json"),
			}).then(function(result){
				return result.data;
				
			});
		
		};

		signup.save = function (fname,lname,email,phone,sn){
			info ={
				firstname:fname,
				lastname:lname,
				email:email,
				phone:phone,
				menu_number:sn
				};
		};

		signup.retrieve = function(){
			return info
		}
	};
})();
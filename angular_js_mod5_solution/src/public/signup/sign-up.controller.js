(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];

function SignUpController(SignUpService) {
  	var signUpCtrl = this;	
   	
   	signUpCtrl.submit = function(){
   		 if (signUpCtrl.menuItem != null){
   				SignUpService.save(signUpCtrl.user.firstname,
   					signUpCtrl.user.lastname,
   					signUpCtrl.user.email,
   					signUpCtrl.user.phone,
   					signUpCtrl.user.menu_number)
   			}
   		};

      signUpCtrl.fetchData = function(){
         var promise = SignUpService.getItems(signUpCtrl.user.menu_number);
         promise.then(function(result){
            signUpCtrl.menuItem = result;
            signUpCtrl.noItem = false;},
            function (result){
               if (result.status === 500){
                  signUpCtrl.noItem = true;
               }
            })
         };
      }

})();

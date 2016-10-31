(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController)

MyInfoController.$inject = ['SignUpService', 'ApiPath'];

function MyInfoController(SignUpService, ApiPath) {
  	var myInfoCtrl = this;

   myInfoCtrl.empty = false;
   myInfoCtrl.info= SignUpService.retrieve();
   myInfoCtrl.basePath = ApiPath;

   if (myInfoCtrl.info == null){
         myInfoCtrl.empty= true;
      }
   else{
          var promise = SignUpService.getItems(myInfoCtrl.info.menu_number);
          promise.then(function(result){
               myInfoCtrl.menuItem = result
          })
      }
   }

})();

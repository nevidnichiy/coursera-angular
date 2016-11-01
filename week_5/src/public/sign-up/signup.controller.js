(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuDataService'];
function SignupController(MenuDataService) {
  var $ctrl = this;
  $ctrl.submit = function() {

    MenuDataService.getItem($ctrl.user.dishCode.toUpperCase() || "") 
      .then(function(response) {
          console.log("was able to access short name " + $ctrl.user.dishCode);
          $ctrl.found = true;
          $ctrl.user.menu = response.data;
          MenuDataService.user = $ctrl.user;
          $ctrl.saved = true;
          console.log(MenuDataService.user);
          return response.data;
      }).catch(function(error) {
          console.log("error access short name " + $ctrl.user.dishCode);
          $ctrl.found = false;
          $ctrl.dishNotfound = true;
          return error;
      });

  };
  
}

})();

(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuDataService'];
function SignupController(MenuDataService) {
  var $ctrl = this;
  $ctrl.submit = function() {
  MenuDataService.user = $ctrl.user;
  if ($ctrl.user.dishCode) {
    MenuDataService.getItem($ctrl.user.dishCode || "") 
      .then(function(response) {
          $ctrl.found = true;
          $ctrl.user.menu = response.data;
          $ctrl.saved = true;
          $ctrl.dishNotfound = false;
          return response.data;
      }).catch(function(error) {
          $ctrl.found = false;
          $ctrl.dishNotfound = true;
          return error;
      });
} else {
      $ctrl.saved = true;
}
  };
  
}

})();

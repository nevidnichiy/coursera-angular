(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.user = {};
  service.getInfo = function() {
    return service.user;
  };
}

})();

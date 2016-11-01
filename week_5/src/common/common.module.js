(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();


//https://silric.github.io/coursera-angular/module5-solution/#/signup
(function() {
    'use strict';
    angular.module('data')
        .component('categoriesList', {
            templateUrl: 'scripts/templates/categoriesList.html',
            bindings: {
                categories: '<'
            }
        });

})();

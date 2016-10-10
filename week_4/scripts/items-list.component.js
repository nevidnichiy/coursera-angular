(function() {
    'use strict';
    angular.module('data')
        .component('itemsList', {
            templateUrl: 'scripts/templates/items.html',
            bindings: {
                items: '<',
                category: '<'
            }
        }); 

})();

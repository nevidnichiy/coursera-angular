(function(){
    'use strict';
    angular.module('data')
    .controller('CategoriesController', CategoriesController);
    
    CategoriesController.$inject = ['menuCategories'];
    
    function CategoriesController(menuCategories) {
        
        var categCtrl = this;
        categCtrl.categories = menuCategories.data;

    }
    
})();

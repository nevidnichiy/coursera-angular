(function(){
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['categoryItems'];
    
    function ItemsController(categoryItems) {
        
        var itemsCtrl = this;
        itemsCtrl.items = categoryItems.data.menu_items;
        itemsCtrl.category = categoryItems.data.category.name;

    }
    
})();

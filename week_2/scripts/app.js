(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController )
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController )
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    ;

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController (ShoppingListCheckOffService) {
  var toBuyCtrl = this;
  toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyCtrl.buyItem = function(index) {
        ShoppingListCheckOffService.buyItem(index);
        toBuyCtrl.allBought = toBuyCtrl.items == 0;        
  };
}

function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    
    var toBuyItems = [
            {name: "Potato Crisps", quantity: 10},
            {name: "Yao guai meat", quantity: 4},
            {name: "Mutfruit", quantity: 5},
            {name: "Nuka-Cola", quantity: 8},
            {name: "Sunset Sarsaparilla", quantity: 1},
            {name: "Beer", quantity: 15},
        ];
        
    var boughtItems = [];
    
    service.getToBuyItems = function() {
      return toBuyItems;  
    };
    
    service.getBoughtItems = function() {
        return boughtItems;  
    };

    service.buyItem = function (itemIndex) {
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
    };
}

})();

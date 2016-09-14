(function(){
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.foodList = '';

    $scope.checkErrors = function() {
        if ($scope.foodList.split(',').indexOf('') > -1) {
            $scope.warning = 'Empty item in list!';  
        } else {
            $scope.warning = '';
        }
    };
    
    $scope.checkFood = function() {
        
        $scope.class = 'green';    
        
        if ($scope.foodList.trim() == '') {
            $scope.message = 'Please enter data first!';
            $scope.class = 'red';
        }
        
        var foodArr = $scope.foodList.split(',');

        if (foodArr.length > 1 && foodArr.length < 4) {
            $scope.message = 'Enjoy';
        } else if (foodArr.length > 3) {
            $scope.message = 'Too much!';
        }
    };
    
}

})();
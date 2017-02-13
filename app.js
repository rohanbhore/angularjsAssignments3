(function(){
'use strict'

  var shoppingList=["milk","peanut","peanut cookies","peanut banana","greaph"];


  angular.module('ShoppingListApp',[])
  .controller('ShopingListController',ShopingListController);
  ShopingListController.$inject=['$scope'];

    function ShopingListController($scope)

    {
      $scope.shoppingList=shoppingList;
    }
})();

(function(){
'use strict';
angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);

function FoundItemsDirective()
{
  var ddo=
  {
    scope:
    {
      items:'<',

    }
  }
}

NarrowItDownController.$inject=[MenuSearchService];
function NarrowItDownController(MenuSearchService)
{
  var menu=this;

  var promise=MenuSearchService.getMatchedMenuItems();
  promise.then(function(response){
  menu.found=response.data;//cond
  })
  .catch(function(error){
    console.log("Somethig went wrong");
  });
}
MenuSearchService.$inject=['$http'];

function MenuSearchService($http)
{
  var service=this;

  service.getMatchedMenuItems=function()
  {
    var response=$http({
      method:"GET",
      url:("https://davids-restaurant.herokuapp.com/menu_items.json")
    });
    return response;
  };
  service.removeItem=function(itemIndex)
  {
    found.splice(itemIndex, 1);
  };
}

})();

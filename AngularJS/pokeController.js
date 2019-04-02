kid.controller('pokeController',['$scope','pokeService','$http', function($scope, pokeService, $http){
    $scope.poke={};
    $scope.listaPokes=[];
    $scope.idName='';

    $scope.hello = function(idName){
        pokeService.getHelloWorld(idName);
    }

    $scope.search = function(idName){
        pokeService.getPoke(idName.toLowerCase()).then(function(response){
            $scope.poke=response.data;
            $scope.listaPokes.push($scope.poke);
            clearInputs();
        });
    }

    $scope.clearAll = function(){
        $scope.listaPokes = [];
    }

    $scope.delete = function(poke){   
        $scope.listaPokes.splice($scope.listaPokes.indexOf(poke),1);
    }

    function clearInputs(){
        $scope.idName = '';
    }
}]);
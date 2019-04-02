kid.service('pokeService',['$http', function($http){

    this.getHelloWorld=function(id){
        console.log("Hello World. "+id);
    };

    this.getPoke=function(idName){
        return $http.get('https://pokeapi.co/api/v2/pokemon/'+idName);
    }
}]);
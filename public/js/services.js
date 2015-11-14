angular.module("FinalApp")
.factory("PostResource", function($resource){
	return $resource("http://jsonplaceholder.typicode.com/posts/:id",{id:"@id"},{update: {method: "PUT"}});
})

.factory('Login', ['$http',function($http) {
	return {
		Facebook : function() {
			return $http.get('/auth/facebook');
		}
		/*,
		getId : function(id) {
			return $http.get('/api/pets/'+id);
		},
		create : function(petData) {
			return $http.post('/api/pets', petData);
		},
		delete : function(id) {
			//debugger;
			return $http.delete('/api/pets/' + id);
		}*/
	}
}])
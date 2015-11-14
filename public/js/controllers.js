angular.module("FinalApp")
	.controller("MainController", function($scope,LxDialogService,LxNotificationService,$resource,PostResource,Login){
		$scope.nombre = "Henrry :D";


		User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id:"@id"});

		$scope.posts = PostResource.query();
		$scope.users = User.query();
		// query() -> GET/posts -> Un arreglo de posts -> isArray: true 
		$scope.removePost = function(post){
			PostResource.delete({id: post.id},function(data){
				//console.log(data);
				//$scope.posts = Post.query(); // :D
			});

			$scope.posts = $scope.posts.filter(function(element){
				return element.id !== post.id;
			});

		}
		
		$scope.opendDialog = function(dialogId)
		{
		    LxDialogService.open(dialogId);
		};

		$scope.closingDialog = function()
		{
		    LxNotificationService.info('Dialog closed!');
		};

		$scope.LoginFacebook = function()
		{
		    Login.Facebook()
				.success(function() {
					alert(":D");
					//$scope.pets = data;
					//$scope.loading = false;
				});
		};

		


	})

	.controller("PostController", function($scope){

	})

;
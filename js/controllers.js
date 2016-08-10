angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  
   $scope.listlength = 20;
   
   $scope.loadMore = function(){
    if (!$scope.friends){
      $scope.$broadcast('scroll.infiniteScrollComplete');
      return;
    }

    if ($scope.listlength < $scope.friends.length)
      $scope.listlength+=10;
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }
  
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('loginCtrl', function($state,$scope,$http,$ionicPopup,$ionicLoading) {
		$scope.user = {};  //declares the object user
		
		$scope.login = function() {
			str="http://pesananku.16mb.com/telkomsel/php/loginWeb.php?ID="+$scope.user.ID+"&PASSWORD="+$scope.user.PASSWORD;
			$ionicLoading.show();
			$http.get(str)
			.success(function (response){   // if login request is Accepted
						if (response.error == false) { 
						$ionicLoading.hide(); 
						$state.go('tab.dash');}	
						else {
							$ionicLoading.hide();
							var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					});
							
						}
			}).error(function() {   						//if login failed
					var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					});
			});
		};
		
})



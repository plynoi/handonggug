(function(){
	var handonggugApp = angular.module('handonggugApp',[]);
	
	handonggugApp.controller('handonggugCtrl',function($scope){
		$scope.things = "";
		$scope.msg = "";
		$scope.processThings = function(){
			var msg = "พระเจ้าฮัน ดอง กุ๊ก เป็นคนสร้าง" + $scope.things;
			$scope.msg = msg;
		};
	});
})();
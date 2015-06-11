app.controller("handonggugCtrl", ["$scope",
	function ($scope) {
		$scope.things = '';
		$scope.msg = '';
		$scope.processThings = function () {
			var msg = '';
			if ($scope.things !== '') {
				msg = 'พระเจ้าฮัน ดอง กุ๊ก เป็นคนสร้าง' + $scope.things;
				
			}else{
				msg = 'พระเจ้าฮัน ดอง กุ๊ก สั่งให้เจ้าจงใส่ข้อความลงใน text box ก่อนจะกด click!';
			}
			$scope.msg = msg;
		};
	}
]);


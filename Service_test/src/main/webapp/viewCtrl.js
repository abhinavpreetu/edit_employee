app.controller('viewCtrl', [ '$scope', '$location', 'shareData',
		function($scope, $location, shareData) {
			$scope.arr = [];
			$scope.arr = empArr;
			angular.forEach($scope.arr, function(value, key) {
				$scope.em = value;
			})
			$scope.editProfile = function(index) {
				shareData.empData = $scope.arr[index];
				$location.url("/edit");
			}
		} ])
var empArr = [ {
	name : "abhinav",
	date : new Date("2016/07/12"),
	email : "abhinav@dhboa.com",
	contact : "8456123970"
}, {
	name : "naresh",
	date : new Date("2014/02/15"),
	email : "naresh@dhboa.com",
	contact : "8456923176"
}, {
	name : "pranav",
	date : new Date("2016/08/26"),
	email : "pranav@dhboa.com",
	contact : "9875641235"
}, {
	name : "sameer",
	date : new Date("2016/12/20"),
	email : "sameer@dhboa.com",
	contact : "7597451235"
}, {
	name : "dilip",
	date : new Date("2016/11/05"),
	email : "dilip@dhboa.com",
	contact : "9865741535"
}, {
	name : "aakash",
	date : new Date("2015/01/10"),
	email : "aakash@dhboa.com",
	contact : "8745963512"
}, {
	name : "deepanjan",
	date : new Date("2015/06/17"),
	email : "deepanjan@dhboa.com",
	contact : "7845961234"
}, {
	name : "pankaj",
	date : new Date("2016/07/27"),
	email : "pankaj@dhboa.com",
	contact : "9865748964"
}, {
	name : "vishal",
	date : new Date("2014/01/13"),
	email : "vishal@dhboa.com",
	contact : "7784579634"
}, {
	name : "nikhil",
	date : new Date("2013/03/04"),
	email : "nikhil@dhboa.com",
	contact : "7789998745"
}, {
	name : "arun",
	date : new Date("2013/04/15"),
	email : "arun@dhboa.com",
	contact : "9986598547"
}, {
	name : "vasu",
	date : new Date("2014/01/11"),
	email : "vasu@dhboa.com",
	contact : "8487784596"
}, ];
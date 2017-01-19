var app = angular.module("myFirstApp", [ "ngRoute" ]);
var viewName, viewDate, viewEmail, viewContact;
app.config(function($routeProvider) {
	$routeProvider.when("/edit", {
		templateUrl : "editProfile.html",

	}).otherwise({
		templateUrl : "viewProfile.html",
	});
});

app.service('shareData', function() {
	var empData = {
		name : '',
		date : '',
		email : '',
		contact : ''
	};
	return empData;
})
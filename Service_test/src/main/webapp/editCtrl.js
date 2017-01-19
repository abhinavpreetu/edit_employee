app.controller('editCtrl', [ '$scope', '$location', 'shareData',
		function($scope, $location, shareData) {
			$scope.employee = shareData.empData;
			$scope.submitForm = function() {
				var obj = JSON.stringify($scope.employee)
				obj = shareData.empData;
				$location.url("/");
			}
		} ])
app.directive('emailError', function() {
	return {
		require : 'ngModel',
		link : function(scope, elm, attrs, ctrl) {
			var EMAIL_REGEXP = /^[a-z0-9_\.#*]+@[a-z0-9]+\.[a-z]+$/;
			ctrl.$validators.emailError = function(modelValue, viewValue) {
				if (EMAIL_REGEXP.test(viewValue)) {
					return true;
				}
				return false;
			}
		}
	}

})
app.directive('nameError', function() {
	return {
		require : 'ngModel',
		link : function(scope, elm, attrs, ctrl) {
			var NAME_REGEXP = /[A-z]+[A-z\s]*$/;
			ctrl.$validators.nameError = function(modelValue, viewValue) {
				if (NAME_REGEXP.test(viewValue)) {
					return true;
				}
				return false;
			}
		}
	}

})

app.directive('contactError', function() {
	return {
		require : 'ngModel',
		link : function(scope, elm, attrs, ctrl) {
			var CONTACT_REGEXP = /^\d{10}$/;
			ctrl.$validators.contactError = function(modelValue, viewValue) {
				if (CONTACT_REGEXP.test(viewValue)) {
					return true;
				}
				return false;
			}
		}
	}

})
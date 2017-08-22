/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */
angular.module('signUp.directive',[])
	.directive('twsSignupHeading', function() {
		return {
			restrict:'EA',
			replace:true,
			template: '<div class = "panel-heading"> '+
	        ' <strong>Register and Get Started</strong> '+
	        '</div> '
		}
	})
	.directive('twsInputFirstName', function() {
		return {
			restrict:'EA',
			replace:true,
			template: '<div class="input-group">'+
            '     <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
            '     <input type="text" ng-model="firstName" class="form-control" id="firstName" placeholder="First Name" required="true">'+
            '</div>'
		}
	})
	.directive('twsInputLastName', function() {
		return {
			restrict:'EA',
			replace:true,
			template: '<div class="input-group">'+
            '     <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
            '     <input type="text" ng-model="lastName" class="form-control" id="Last Name" placeholder="Last Name" required="true">'+
            '</div>'
		}
	})
	.directive('twsSignUp', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        template: '<button type="submit" ng-click="register(this)" class="btn btn-primary btn-block">Join now</button>'
	    }
	})
	.directive('twsValidationResponse', function() {
		return {
			restrict: 'EA',
			template: '<label class="response-label">{{response}}</label>'
		}
	})
	.directive('twsPanelSignupFooter', function() {
	    return {
	        restrict: 'EA',
	        replace: true,
	        template: '<div class="panel-footer">'+
	                  ' Click Here to <a href="#!sign-in">Sign In</a>'+
	                  '</div>'
	    }
	});
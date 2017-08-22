/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */
angular.module('login.directive',[])
.directive('twsLoginHeading', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class = "panel-heading"> '+
                  ' <strong>Get your Contacts Managed Smartly</strong> '+
                  '</div> '
    }
})
.directive('twsInputUserName', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class="input-group">'+
                  '     <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
                  '     <input type="text" ng-model="userName" class="form-control" id="userName" placeholder="User Name" required="true">'+
                  '</div>'
    }
})
.directive('twsInputPassword', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class="input-group">'+
                  '     <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'+
                  '     <input type="password" ng-model="password" class="form-control" id="password" placeholder="Password" required="true">'+
                  '</div>'
    }
})
.directive('twsRememberMe', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class="checkbox">'+
                  '   <label class="checkBox-label">'+
                  '     <input type="checkbox" ng-model="rememberMe">Remember me</label>'+
                  '</div>'
    }
})
.directive('twsSignIn', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<button type="submit" ng-click="loginUser(this)" class="btn btn-primary btn-block">Sign in</button>'
    }
})
.directive('twsPanelFooter', function() {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class="panel-footer">'+
                  ' Not Registered? <a href="#!sign-up">Register here</a> <!--| <a class="label-reset" href="#">Reset password</a>-->'+
                  '</div>'
    }
})
.directive('twsToaster', function() {
	return {
		restrict: 'EA',
		template: 
		 '<div id="toastersContainer">' +
	     '	<toaster-container toaster-options={limit:1}></toaster-container>' +
	     '</div>'
	}
}).directive('twsIncorrectLoginResponse', function() {
	return {
		restrict: 'EA',
		template: '<label class="response-label">{{response}}</label>'
	}
});

/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("login.module",["toaster", "ngProgress", "login.directive", "ngRoute","ngCookies", "contact-service.module", "ngCookies"])

.controller("loginCtrl", ["$scope", "ngProgress", "toaster", "$location", "contactService","$rootScope", "$cookies",
                function($scope, ngProgress, toaster, $location, contactService, $rootScope, $cookies) {
    $scope.userName = "";
    $scope.password = "";
    $scope.rememberMe = "";

    $scope.loginUser = function(values){
        if($scope.userName != undefined && $scope.userName !='' && $scope.password !=undefined && $scope.password !=''){
        	ngProgress.start();
        	contactService.authenticateUser($scope.userName, $scope.password, function(validUser){
        		if(validUser == 'true') {
        			$cookies.put($scope.userName,$scope.password);
        			$cookies.put("userLogged",$scope.userName.toLowerCase());
        			toaster.pop("success", "Welcome ", $cookies.get("userLogged").toUpperCase(), 1000, "trustedHtml");
        			$rootScope.userName = $scope.userName.toUpperCase();
        			$location.path("/dashboard");
        			ngProgress.complete();
        		} else
        			toaster.pop("Failed", " Please enter valid User name and Password ","", 2000, "trustedHtml");
        			values.response = "";
        		ngProgress.complete();
        	});
        }else
        	values.response = "Please enter both UserName and Password";
    }

}])


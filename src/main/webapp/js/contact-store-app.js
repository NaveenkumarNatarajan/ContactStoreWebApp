/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("contactStoreApp", ["ngRoute", "login.module", "login.directive", "dashboard.module"
                                   , "signUp.module", "signUp.directive","contact-service.module"
                                   , "ngCookies", "addContact.module", "deleteContact.module"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider
		    .when("/login", {
		            url: "sign-in",
				    templateUrl: "views/sign-in.html",
				    controller: "loginCtrl"
		    }).when("/dashboard",{
		    	url: "dashboard",
		    	templateUrl: "views/dashboard.html",
		    	controller: "dashboardCtrl"
		    }).when("/sign-up",{
		    	url: "register",
		    	templateUrl: "views/sign-up.html",
		    	controller: ""
		    }) 
		    $routeProvider.otherwise({
		        redirectTo: "/login"
		    });
	}])
	.factory("ConfigProvider", function(){
		this.userAuthenticationAPI = "http://localhost:7777/api.tws.com/v1/user/authenticate";
		this.userRegistrationAPI   = "http://localhost:7777/api.tws.com/v1/user/register";
		this.contactsAPI        = "http://localhost:7777/api.tws.com/v1/user/";
		return this;
	});
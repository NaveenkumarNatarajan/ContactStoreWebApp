/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("signUp.module",["toaster", "ngProgress", "signUp.directive","ngRoute", "contact-service.module"])

    .controller("signUpCtrl", ["$scope", "ngProgress", "toaster", "$location", "contactService",
                    function($scope, ngProgress, toaster, $location, contactService) {
        $scope.userName = "";$scope.firstName = "";
        $scope.password = "";$scope.lastName = "";
        $scope.response = "";
        $scope.register =  function(params) {
        	$scope.response = "";
            if($scope.userName != undefined && $scope.userName !='' && $scope.password !=undefined && 
               $scope.password !='' && $scope.firstName != undefined && $scope.firstName !='' &&
               $scope.lastName != undefined && $scope.lastName !=''){
            	ngProgress.start();   
            	var userInfo = {"userName":$scope.userName,"password":$scope.password,
            			         "lastName":$scope.lastName,"firstName":$scope.firstName}
            	contactService.register(userInfo, function(response){
            		if(response.indexOf("Success")!=-1){
                		toaster.pop("success", "Registered Successfully","", 1000, "trustedHtml");
                        $location.path("/login");
                	}else{
                		$scope.response = response;
                	}
            	})
                ngProgress.complete();

            }else
            	$scope.response = "Please fill all required fields";
        }
    }])
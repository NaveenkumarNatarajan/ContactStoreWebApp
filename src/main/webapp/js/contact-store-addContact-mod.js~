/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("addContact.module",["toaster", "ngProgress", "contact-service.module"])

.controller("addContactCtrl", ["$scope", "ngProgress", "toaster", "$location", "contactService", "$cookies",
                function($scope, ngProgress, toaster, $location, contactService, $cookies) {
	$scope.firstName = ""; $scope.lastName = "";
    $scope.email = ""; $scope.phone = "";
    $scope.streetAddress = "", $scope.notes = "";
    console.log('In Add Contact Controller');
    
    $scope.addContact = function(values){
        if($scope.firstName != undefined && $scope.firstName !='' && 
           $scope.lastName != undefined && $scope.lastName !='' &&
           $scope.email != undefined && $scope.email !='' &&
           $scope.phone != undefined && $scope.phone !='' &&
           $scope.streetAddress != undefined && $scope.streetAddress !='' &&
           $scope.notes != undefined && $scope.notes !=''){
        	ngProgress.start();
        	var payload = buildContactPayload(values);
        	contactService.addContact(payload, $cookies.get("userLogged"), function(response){
    			toaster.pop("success", " Added Successfully! ", "", 1000, "trustedHtml");
    			ngProgress.complete();
        	});
        }else
        	values.response = "Please Fill all required fields";
    }
    
    function buildContactPayload(values){
    	var payload = {};
    	payload.firstName = values.firstName;
    	payload.lastName = values.lastName;
    	payload.email = values.email;
    	payload.phoneNumber = values.phone;
    	payload.streetAddress = values.streetAddress;
    	payload.notes = values.notes;
    	return payload;
    }
}])


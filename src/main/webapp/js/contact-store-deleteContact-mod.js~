/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("deleteContact.module",["toaster", "ngProgress", "contact-service.module"])

    .controller("deleteContactCtrl",["$scope", "contactService", "$cookies", "toaster", function($scope, contactService, $cookies, toaster) {
    	$scope.userName = $cookies.get("userLogged");
    	$scope.searchSelectAllSettings = { enableSearch: true, showSelectAll: true, keyboardControls: true,
    									   displayProp:'fullName',idProp:'contactId' };
    	$scope.searchSelectAllModel = [];
        $scope.example14settings = {
            scrollableHeight: '200px',
            scrollable: true,
            enableSearch: true
        };

        $scope.searchSelectAllData = [];
    	angular.element(document).ready(function(){
    		contactService.getContact($scope.userName, function(response){
    			$scope.contactList = response;
    		})
    	});
    	
    	$scope.deleteContact = function(){
    		if($scope.searchSelectAllModel.length >0){
    			contactService.deleteContact($scope.searchSelectAllModel,$scope.userName, function(response){
    				toaster.pop("success", "Deleted Successsfully!", "", 1000, "trustedHtml");
    			});
    		}else
    			toaster.pop("failed", "No Contacts Selected !", "", 1000, "trustedHtml");
    	}
    }])

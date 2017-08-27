/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("dashboard.module", ["toaster", "ngProgress","ngRoute","angularjs-dropdown-multiselect"])

.controller("dashboardCtrl", ["$scope", "ngProgress", "toaster", "$location", "$rootScope", "$cookies", 
                              function($scope, ngProgress, toaster, $location, $rootScope, $cookies) {
    	$scope.userName = $cookies.get("userLogged").toUpperCase();
    	$scope.displayDataView = true;
    	$scope.displayAddNewContact = false;
    	$scope.displayDeleteContact = false;
    	
    	$scope.logout = function() {
    		toaster.pop("success", "Bye, ", $scope.userName, 1000, "trustedHtml");
    		console.log('Logged out');
    		$location.path("/login");
    	}
    	$scope.addNewContact = function() {
    		$scope.displayDataView = false;
    		$scope.displayDeleteContact = false;
    		$scope.displayAddNewContact = true;
    	}
    	$scope.dataView = function() {
    		$scope.displayAddNewContact = false;
    		$scope.displayDeleteContact = false;
    		$scope.displayDataView = true;
    	}
    	$scope.deleteContact = function() {
    		$scope.displayDataView = false;
    		$scope.displayAddNewContact = false;
    		$scope.displayDeleteContact = true;
    	}
    	
    }])
    .controller("dataViewCtrl", ["$scope", "ConfigProvider", function($scope, ConfigProvider){
    	angular.element(document).ready(function(){
    	   var table = $('#example').DataTable({
    		  ajax: ConfigProvider.contactsAPI+ $scope.userName + '/contact',
    	      dom: 'Alfrtip',
    	      alphabetSearch: {
    	         column: 0
    	      },
    	      language: {
    	         alphabetSearch: {
    	            alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    	         }
    	      }      
    	   });
    	});
    }])
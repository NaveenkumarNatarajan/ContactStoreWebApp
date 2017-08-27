/**
 * @author Naveen
 * @since 2017-08-14
 * @version 1.0
 */

angular.module("contact-service.module",[])
	.service("contactService", ["$http", "ConfigProvider", function contactService($http, ConfigProvider) {
		
		this.authenticateUser = function(userName, password, callback) {
			url = ConfigProvider.userAuthenticationAPI;
			var httpReq = $http({
				method : "POST",
				url : url,
				data : {"userName":userName,"password":password}
			}).then(function successCallback(response) {
				callback(response.data);
			  }, function errorCallback(response) {
				  callback(response.data);
			});
		}
		this.register = function(params, callback){
			url = ConfigProvider.userRegistrationAPI;
			var httpReq = $http({
				method : "POST",
				url : url,
				data : params
			}).then(function successCallback(response) {
				callback(response.data);
			  }, function errorCallback(response) {
				callback(response.data);
			});
		}
		this.addContact = function(params, user, callback) {
			url = ConfigProvider.contactsAPI + user +'/contact';
			var httpReq = $http({
				method : "POST",
				url : url,
				data : params
			}).then(function successCallback(response) {
				callback(response.data);
			  }, function errorCallback(response) {
				callback(response.data);
			});
		}
		this.getContact = function(user, callback) {
			url = ConfigProvider.contactsAPI+ user + '/contact?pretty';
			var httpReq = $http({
				method : "GET",
				url : url
			}).then(function successCallback(response) {
				callback(response.data);
			  }, function errorCallback(response) {
				callback(response.data);
			});
		}
		this.deleteContact =  function(selectedContact, user, callback){
			var contactIds = [];
			selectedContact.forEach(function(contact){
				contactIds.push(contact.contactId);
			});
			
			url = ConfigProvider.contactsAPI+ user + '/contact';
			var httpReq = $http({
				method : "DELETE",
				url : url,
				data : contactIds.toString()
			}).then(function successCallback(response) {
				callback(response.data);
			  }, function errorCallback(response) {
				callback(response.data);
			});
		}
	}]);
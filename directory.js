angular.module('directoryApp',[])
	.controller('directoryController',function($scope)
	{
		$scope.list = [{'name':'Manas',age:25},{'name':'Pentagon Jr.','age':32},
							{'name':'Santana',age:21}]
	});
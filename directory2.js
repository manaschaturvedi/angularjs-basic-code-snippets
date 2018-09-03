angular.module('directoryApp',[])
	.controller('directoryController',function($scope)
	{
		$scope.list = [{'name':'Manas',age:25},{'name':'Pentagon Jr.','age':32},
							{'name':'Santana',age:21}];

		$scope.addPerson = function()
		{
			$scope.list.push({'name':$scope.name,'age':$scope.age});
			$scope.name = '';
			$scope.age = '';
		}
	});
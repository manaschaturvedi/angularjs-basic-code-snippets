angular.module('directoryApp',[])
	.controller('directoryController',function()
	{
		var dirList = this;
		dirList.list = [{'name':'Manas',age:25},{'name':'Pentagon Jr.','age':32},
							{'name':'Santana',age:21}];

		dirList.toggle = false;

		dirList.addPerson = function()
		{
			dirList.list.push({'name':dirList.name,'age':dirList.age});
			dirList.name = '';
			dirList.age = '';
		}
	});
function bind(func,object)
{
	//I don't know how many arguements will be passed to this function
	return function(){
		return func.apply(object,arguments);
	};
}

var testArray = [];
var pushTest = bind(testArray.push,testArray);
pushTest("A");
pushTest("B");
testArray.push("C");
console.log(testArray);

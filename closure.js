/*It is just like decorater in python 
 *
 *functions to not just package up a computation, but also an environment
 * */
function makeAddFunction(amount)
{
	function add(number)
	{
		return number + amount
	}
	return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);

console.log("addTwo" + addTwo(1));
console.log("addFive" + addFive(1));



/*
 * Closure can provide an environment to inner function.
 * This can be used to construct function
 */
function greaterThan(x)
{
	//There are six basic types of values: Numbers, strings, booleans, objects, functions, and undefined 
	return function(y)
	{
		return y > x;
	};
}
var greaterThanTen = greaterThan(10);

console.log(greaterThanTen(9))

/*
 * functional programming. Now function and variable are all objects!(javascript,python)
 * In C: function name and variable are address!
 *
 */

//Functions that operate on other functions are called higher-order functions. 

function forEach(array,action)
{
	for(var i = 0; i!=array.length; ++i){
		action(array[i])
	}
}

function mysum(numbers)
{
	var total = 0;
	//anonymous function
	forEach(numbers,function(number){
		total += number;
	});

	return total;
}

console.log(mysum([1,2,3,4,5]))




function negate(func) {
  return function() {
    return !func.apply(null, arguments);
  };
}


var f = negate(
		function(a)
		{return a;}
		);

console.log(f([1,0,1]))

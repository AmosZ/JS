function forEach(array,action)
{
	for(var i=0; i!=array.length;++i)
	{
		action(array[i]);
	}
}
function sum(numbers)
{
	var total = 0;
	forEach(numbers,function(number){
		total += number;
	});
	return total;
}
//console.log(sum([1,2,3,4,5,6]));
function add(a,b)
{
	return a + b;
}
// Action on each base and array element then update base with the result.
// Get a value from a multi-dimensional array
function reduce(action,base,array)
{
	forEach(array,function(element)
	{
		base = action(base,element)
	});
	return base;
}

console.log(reduce(add,0,[1,2,3,4,5]));


function count(test,array)
{
	return reduce(function(total,element)
	{
		return total + test(element)?1:0;
	},0,array)
}

function countZero(array)
{
	return count(equals(0),array);
}

console.log(countZero([0,2,3,4,0,1,0]));

function forEach(action,array)
{
	for(var i =0; i!= array.length; ++i)
	{
		action(array[i]);
	}
}

forEach(console.log,[1,2,3,4,5]);

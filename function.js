var variable = "top-level";
function parentFunction() {
  var variable = "local";
  function childFunction() {
    console.log(variable);
  }
  childFunction();
}
parentFunction();

var something = 1;
{
	var something = 2;
	console.log("Inside: " + something);
}
console.log("Outside: "+ something);



/*closure*/
var variable = "top-level";
function topFunction()
{
	var variable = "local";
	function bottomFunction()
	{
		console.log(variable);
	}
	return bottomFunction;
}

var child = topFunction();
child();

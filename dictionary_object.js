function Dictionary(startValues)
{
	this.values = startValues || {};
}
Dictionary.prototype.store = function(name,value)
{
	this.values[name] = value;
};

Dictionary.prototype.lookup = function(name)
{
	return this.values[name];
};

Dictionary.prototype.contains = function(name)
{
	return Object.prototype.hasOwnProperty.call(this.values,name) && 
		Object.prototype.propertyIsEnumerable.call(this.values,name);
}

Dictionary.prototype.each = function(action)
{
	for(e in this.values){
		action(e,this.values[e]);
	}
}

var colours = new Dictionary({Grover: "blue",
                              Elmo: "orange",
                              Bert: "yellow"});
console.log(colours.contains("Grover"));
console.log(colours.contains("constructor"));
colours.each(function(name, colour) {
  console.log(name, " is ", colour);
});

var thePlan =
  ["############################",
   "#      #    #      o      ##",
   "#                          #",
   "#          #####           #",
   "##         #   #    ##     #",
   "###           ##     #     #",
   "#           ###      #     #",
   "#   ####                   #",
   "#   ##       o             #",
   "# o  #         o       ### #",
   "#    #                     #",
   "############################"];
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
//action: function(property of object, value of property)
Dictionary.prototype.each = function(action)
{
	function forEachIn(object, action){
		for (var property in object){
			if (Object.prototype.hasOwnProperty.call(object, property))
				action(property, object[property]);
		}
	}
	forEachIn(this.values,action);
}


function Point(x,y)
{
	this.x = x;
	this.y = y;
}

Point.prototype.add = function(other)
{
	return new Point(this.x + other.x, this.y + other.y);
};

Point.prototype.isEqualTo = function(other)
{
	return this.x == other.x && this.y == other.y;
}
/* 1. new allocate memory for p1 and let this point to p1 */
 //2. set __proto__ of this object(p1) point to Function's prototype
 //3. Initialize inner variable in constructor function
 //So, Point.add ==> No this, have nothing to do with object. 
 /*object's __proto__ point to the same prototype with constructor function. So if we add some attributes in constructor's prototype function, it works!*/
function Grid(width,height)
{
	this.width = width;
	this.height = height;
	this.cells = new Array(width*height);
}

Grid.prototype.valueAt = function(point)
{
	return this.cells[point.y * this.width + point.x];
};

Grid.prototype.setValueAt = function(point,value)
{
	this.cells[point.y * this.width + point.x] = value;
};

Grid.prototype.isInside = function(point)
{
	return point.x >=0 && point.y >=0 && point.x < this.width && point.y < this.height;
};

Grid.prototype.moveValue = function(from,to)
{
	this.setValueAt(to,this.valueAt(from));
	this.setValueAt(from,undefined);
};
//action: function(point, value);
Grid.prototype.each = function(action)
{
	for(var y=0;y!=this.height;++y){
		for(var x=0;x!=this.width;++x){
			//Create a new object? action on a new object... It is meaningless..?
			//Or just output the result.
			var point = new Point(x,y);
			action(point,this.valueAt(point));
		}
	}

};
var directions = new Dictionary(
  {
   "n":  new Point( 0, -1),
   "ne": new Point( 1, -1),
   "e":  new Point( 1,  0),
   "se": new Point( 1,  1),
   "s":  new Point( 0,  1),
   "sw": new Point(-1,  1),
   "w":  new Point(-1,  0),
   "nw": new Point(-1, -1)
  }
);
function StupiedBug(){}
StupiedBug.prototype.character = "o";
/*
 * Description:
 *		Return next action based on the surroundings of current position
 *		action:
 *			1.type: type of action
 *			2.direction: direction of this action
 * Arguments:
 *		surroundings: surroundings of Bug
 *		(direction name) : character of object
*/
StupiedBug.prototype.act = function(surroundings)
{
	return {type: "move", direction: "s"};
};

var wall = {};
wall.character = "#";

function Terruriam(plan)
{
	var grid = new Grid(plan[0].length,plan.length);
	for(var y =0; y!=plan.length; ++y){
		var line = plan[y];
		for(var x=0; x!=plan[0].length; ++x){
			grid.setValueAt(new Point(x,y),elementFromChar(line.charAt(x)));
		}
	}
	this.grid = grid;
}
function elementFromChar(c)
{
	if (c == " ")
		return undefined;
	else if (c == "#")
		return wall;
	else if (c == "o")
		return new StupiedBug();
}
function charFromElement(e)
{
	if(e == undefined)
		return " ";
	else
		return e.character;
}

Terruriam.prototype.toString = function()
{
	var characters = [];
	var endofLine = this.grid.width - 1;
	this.grid.each(function(point,value)
	{
		characters.push(charFromElement(value));
		if(point.x == endofLine)
			characters.push("\n");
	});
	return characters.join("");
};

var terruriam = new Terruriam(thePlan);
console.log(terruriam.toString());
/*
 * Creature
 * {
 * object: the value of the creature(wall,bug ...)
 * point: the position of this creature
 * }
 */
Terruriam.prototype.listActingCreatures = function()
{
	var found = [];
	this.grid.each(function(point,value){
		if(value != undefined && value.act)	
			found.push({object:value,point:point});
	});
	return found;
}
//list surroudings around point
//return an object just like:
// {                        
/*   "n":  new Point( 0, -1)*/
  //"ne": new Point( 1, -1),
  //"e":  new Point( 1,  0),
  //"se": new Point( 1,  1),
  //"s":  new Point( 0,  1),
  //"sw": new Point(-1,  1),
  //"w":  new Point(-1,  0),
  //"nw": new Point(-1, -1) 
 /*}                        */

Terruriam.prototype.listSurroundings = function(point)
{
	var result = {};
	//We need to keep this.grid now .
	//Becasue in function below,this point to global object rather than  Terruriam's grid attribute
	var grid = this.grid;
	directions.each(function(name,direction)
	{
		var place = point.add(direction);
		if(grid.isInside(place)){
			result[name] = charFromElement(grid.valueAt(place));
		}
		else{
			result[name] = "#";
		}
	});
	return result;
}
var center = new Point(3,4);
console.log(terruriam.listSurroundings(new Point(3,4)));

//Take action which is defined in creature.object.act
Terruriam.prototype.processCreature = function(creature)
{
	var surroundings = this.listSurroundings(creature.point);
	var action = create.object.act(surroundings);
	if(action.type == "move" && directions.contains(action.direction))
	{
		var to = creature.point.add(directions.lookup(action.direction));
		if(this.grid.isInside(to) && this.grid.valueAt(to) == undefined)
		{
			this.grid.moveValue(creature.point,to);
		}
	}
	else{
		throw new Error("Unsupported action: " + action.type);
	}
};



roads = {}
function forEach(array,action)
{
	for(var i =0; i!= array.length; ++i){
		action(array[i]);
	}
}
function makeRoad(src,dst,dist)
{
	function addRoad(src,dst)
	{
		if(!(src in roads))
			roads[src] = [];
		roads[src].push({dst:dst,distance:dist});
	}
	addRoad(src,dst);
	addRoad(dst,src);
}

function makeRoads(src)
{
	for(var i=1;i<arguments.length;i+=2)
	{
		makeRoad(src,arguments[i],arguments[i+1]);
	}
}

makeRoads("Point Kiukiu", "Hanaiapa", 19,
          "Mt Feani", 15, "Taaoa", 15);
makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5,
          "Atuona", 4, "Mt Ootua", 11);
makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
makeRoads("Hanapaoa", "Mt Ootua", 3);
makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);

function roadFrom(src)
{
	var found = roads[src];
	if(found == undefined)
		throw new Error("No place found " + src);
	else
		return found;
}


//console.log(roads["Airport"]);

function gamblerPath(src,dst)
{
	paths = [];
	function randomDirection(src)
	{
		function randomInt(below)
		{
			return Math.floor(Math.random()*below);
		}
		var options = roadFrom(src);
		ret = randomInt(options.length);
		return options[ret].dst;
	}
	current = src;
	paths.push(src);
	while (current != dst)
	{
		current = randomDirection(current);
		paths.push(current);
	}
	return paths;
}

//console.log("GamblerPath: " + gamblerPath("Airport","Cemetery"));

function member(array,value)
{
	var found = false;
	forEach(array,function(element){
		if (element === value){
			found = true;
		}
	});
	return found;
}

function any(test, array) {
  for (var i = 0; i < array.length; i++) {
    var found = test(array[i]);
    if (found)
      return found;
  }
  return false;
}

function member(array, value) {
	if(value in array)
		return true;
	else
		return false;
}

function flattern(arrays)
{
	var result = [];
	forEach(arrays,function(array){
		forEach(array, function (element){result.push(element);});
	});
	return result;
}

function filter(test,array)
{
	var result = [];
	forEach(array,function (element){
		if(test(element))
			result.push(element);
	});
	return result
}


console.log(member(["Fear", "Loathing"], "Denial"));

function map(action,array)
{
	var result = [];
	forEach(array,function(element){
		result.push(action(element));
	});
	return result;
}
function roadsFrom(place)
{
	var found = roads[place];
	if(found == undefined){
		throw new Error("No place named " + place);
	}
	else{
		//console.log("In roadsFrom: ");
		//console.log(found);
		return found;
	}
}

function possibleRoutes(from, to) {
  function findRoutes(route) {
    function notVisited(road) {
      return !member(route.places, road.dst);
    }
    function continueRoute(road) {
      return findRoutes({places: route.places.concat([road.dst]),
                         length: route.length + road.distance});
    }
   /* console.log("route is:");*/
	console.log(route);
    var end = route.places[route.places.length - 1];
	//console.log("end is :" + end);
    if (end == to)
      return [route];
    else
      return flattern(map(continueRoute, filter(notVisited,
                                               roadsFrom(end))));
  }
  //console.log("from: " + from + " to: " + to);
  return findRoutes({places: [from], length: 0});
}

console.log(possibleRoutes("Hanapaoa", "Point Teohotepapapa"));

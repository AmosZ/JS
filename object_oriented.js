var rabbit = {}; // new Object()
rabbit.speak = function(line)
{
	console.log("The rabiit says " + line);
}

function speak(line)
{
	console.log("The " + this.adjective + "rabbit says" + line);
}
var whiteRabbit = {adjective:"white",speak:speak};
var fatRabbit = {adjective:"fat",speak:speak};
whiteRabbit.speak("Hello");
fatRabbit.speak("HI");

speak.apply(fatRabbit,["Yum."]);
speak.call(whiteRabbit,"Burp");

//1. Construct function start with Caption letter
//2. When a function is called with the word new in front of it, this variable will point at the new object which it will automatically return
function Rabbit(adjective)
{
	this.adjective = adjective;
	this.speak = function(line){
		console.log("The " + this.adjective + "rabbit says " + line + " !");
	};
}

var killerRabbit = new Rabbit("killer");
killerRabbit.speak("GRAAAAAAAAAAAAAAAAAAAAAH!");


function makeRabbit(adjective)
{
	return{
		adjective: adjective,
		speak: function(line){
			console.log(adjective + "rabbit say: " + line);
		}
	}
}

var blackRabbit = makeRabbit("black");
blackRabbit.speak("I am black rabbit");

console.log(blackRabbit.constructor);//Created in makeRabbit return.
console.log(makeRabbit.prototype.constructor);//function's prototype is itself.Every function automatically get a prototype property, whose constructor property points back at the function.
console.log(killerRabbit.constructor);
console.log(Rabbit.prototype.constructor);

Object.prototype.properties = function()
{
	var result = [];
	for (var property in this){
		if(this.hasOwnProperty(property)){
			result.push(property);
		}
	}
	return result;
}
var noCatsAtAll = {};
if("constructor" in noCatsAtAll)
{
	console.log("Yes, there definitely is a cat called 'constructor'")

}

var test = {x:10,y:3};
var test2 = {x:10,y:9,z:8};
console.log(test.properties());
console.log(test2.properties());

function Person(name)
{
	this.name = name; 
}

var person = new Person("hello");

Person.birth = '1988';
Person.prototype.sex = 'male'

console.log(person.sex);

person.country = 'China';

console.log(person.country);

var personA = new Person("Hi");
console.log(personA.country);
console.log(personA.sex);

console.log("Birthday is :");
console.log(personA.birth);

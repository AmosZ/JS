var text = "purple haze"
console.log(text.length)
/*SOme method in text to ....*/
console.log(text["length"])

var cat = {
	colour: "grey",
	name: "Spot",
	size: 46
};
cat.size = 47;
console.log(cat);

delete cat.size;

console.log(cat.size);

console.log(cat);

cat.sex = "male"
console.log(cat);


var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

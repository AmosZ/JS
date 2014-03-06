var config = {
	writable: true,
	enumerable: true,
	configurable: true
};

var defineProperty = function(obj,name,value)
{
	config.value = value;
	Object.defineProperty(obj,name,config);
}

var person = Object.create(null);
defineProperty(person,'firstName','Amos Zhu');
defineProperty(person,'lastName','Qian');
console.log(person);

var man = Object.create(null);
defineProperty(man,'sex','male');

var yehuda = Object.create(man);
defineProperty(yehuda,'firstName','Yehuda');
defineProperty(yehuda,'lastName','Katz');

console.log(yehuda.sex);
console.log(yehuda.firstName);
console.log(yehuda.lastName);

console.log(Object.getPrototypeOf(yehuda));

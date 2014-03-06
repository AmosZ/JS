var mailArchive = {0: "Dear nephew, ... (mail number 1)",
                   1: "(mail number 2)",
                   2: "(mail number 3)"};

for (var current = 0; current in mailArchive; current++)
  console.log("Processing e-mail #", current, ": ", mailArchive[current]);


/*array = list in python*/
/*python*/
//mailArchive = ["Dear nephew","number 2","number 3"]

//for i in mailArchive:
	/*print i;*/

var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
console.log(mack.join(" "));//convert array to string
console.log(mack.pop());
console.log(mack);


var words = "Cities of the Interior";
console.log(words.split(" "));//convert string to array


function catNames(paragraph) {
  var colon = paragraph.indexOf(":");
  //slice(1,3) : string[1:3]
  return paragraph.slice(colon + 2,colon + 5).split(", ");
}

console.log(catNames("born 20/09/2004 (mother Yellow Bess): " +
              "Doctor Hobbles the 2nd, Noog"));

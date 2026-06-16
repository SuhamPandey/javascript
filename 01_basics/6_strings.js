const name = "suham"
const repocount = 50 

// console.log(name + repocount + " Value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('suham-pandey-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));           //charAt() use garera kun index maa kun character xa herna milxa


const newString = gameName.substring(0,4)             // only start on positive number
console.log(newString);

const anotherString = gameName.slice(-6, 4)          //can start on negative number also
console.log(anotherString);

const newStringone = "   suham  "
console.log(newStringone);
console.log(newStringone.trim());                // trim removes starting and ending spaces .... trimstart() and trimEnd() is also present 


const url = "https://suham.com/suham%20pandey"
console.log(url.replace('%20', '-'))

console.log(url.includes('suham'))
console.log(url.includes('ram'))

console.log(gameName.split('-'));

const str = "the quick brown fox jumps over the lazy dog.";
console.log(str.split(' ')[3] )           //splits and gives word of 3rd index that is fox
console.log(str.split(" "));             //splits str based on spaces and returns array of words

console.log(str.split(""));              //splits string into array of individual character


//replace(old,new)     --> str.replace("quick", "fast")    this replaces quick with fast
//replaceAll(old,new)  --> str.replace("the", "a")         this replaces all "the" with "a"


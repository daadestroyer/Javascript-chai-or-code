// array

const arr =  [0,1,2,3,4,5]
const heroes = ["shaktiman","haatim"]
const faang = new Array("F","A","A","N","G");
console.log(arr[0]);
console.log(heroes[1]);
console.log(faang[2]);


arr.push(100) // push pushes the element in same array
arr.pop()
console.log(arr);


const marvel_heroes = ["ironman","thor","hulk","captain america"]
const dc_heroes = ["batman","superman","flash"]

var allheroes = marvel_heroes.concat(dc_heroes) // concat return new array

console.log(allheroes);
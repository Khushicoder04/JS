const name = "khushi"
const repoCount = 5

// console.log(name + repoCount + " value"); //khushi5 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//output will get is( Hello my name is khushi and my repo count is 5).

const gameName = new String('khushi-Code')

console.log(gameName[0]);// k
console.log(gameName.__proto__);// {}

console.log(gameName.length);// 10
console.log(gameName.toUpperCase());// KHUSHICODE
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString); // khus //last is not including only 0,1,2,3 not 4.

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);// s // we can use negative values in slice only.

const newStringOne = "   khushi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khushi.com/khushi%20rai"

console.log(url.replace('%20', '-'));// output- https://khushi.com/khushi-rai

console.log(url.includes('khushi'));

console.log(gameName.split('-'));
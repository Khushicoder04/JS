let score = 33;//33abz //null //undifined // true/false
 
// const {score} = req.body
console.log(typeof score);
console.log(typeof (score));// as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

// let isLoggedIn = 1 gives true
// let isLoggedIn = ""// gives false
let isLoggedIn = "khushi" //gives true
let boooleandIsLogged = Boolean(isLoggedIn)
console.log(boooleandIsLogged);

//1=>true, 0=>fasle

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

//****************************OPERATIONS************** */

let value = 3
let negValue = -value
// console.groupCollapsed(negValue);

console.log(2*2);//-, *, %, /, **

let str1 = "hello"
let str2 = "khushi"

let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);//here the output is coming 122
console.log(1 + 2 + "2");//but here it is coming 32(as it adding forst number 1 and 2)

//critical conversion(we should not do because it has no sense)
console.log(+true);// this is giving one
// console.log(true+); give error
console.log(+"");// it will give 0

let num1, num2, num3
num1=num2=num3=2+2

let gameCounter = 100
gameCounter++;//or ++gameChanger will get the same value as 101 in this nthing will chanage but the values get change
//prefix and postfix
//prefix me value pehle increment ho jati hai, postfix me bad me hoti hai
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
//for example
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

console.log(gameCounter);
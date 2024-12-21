// primitive and non-primitive
//call by value and call by reference
//primitive(these are call my value will provide a copy of a data and what we do changes wo do in the copy ):7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail; //this will give undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigNumber = 34354434523478765432345n


//reference(non primitive)
// in this we have array, objects, functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "khushi",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive)will get a copy, heap(non-primitive) get a reference ,change in original value

let myYoutubename = "beCodeFree"

let anothername = myYoutubename
anothername = "khushiCode"

console.log(myYoutubename);
console.log(anothername);
//will get output this:
//beCodeFree
//khushiCode

let user = {
    email: "khushi123@gmail.com",
    upi: "user@ybl"
}

let user1 = user

user1.email = "khushi@gmail.com"

console.log(user.email);
console.log(user1.email);// in this we will get the same value for both and that is khushi@gmail.com


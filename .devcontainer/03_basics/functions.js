// console.log("k");
// console.log("h");
// console.log("u");
// console.log("s");
// console.log("h");
// console.log("i");

function saymyname(){
    console.log("k");
console.log("h");
console.log("u");
console.log("s");
console.log("h");
console.log("i");
}
// saymyname()
// function addtwonumber(num1, num2){  // this call parameter, we are making function definition
//    console.log( num1 + num2);
// }
// addtwonumber(3, 4)// when we call function the value we pass is call as arguments
//we can alos store in a variable also

function addtwonumber(num1, num2){  // this call parameter, we are making function definition
    //  let res = num1 + num2
    //  console.log("khushi");
    //  return res
    // we can also do like this
    return num1 + num2
    //  console.log("khushi"); after the resunt nothing will print
 }

const res = addtwonumber(3, 4)

// console.log("result: ", res); // this is giving undefined
// let see it down to make iy correct how it work

function loginusermsg(username){
    if(username===undefined){
console.log("please enter a username");
return
    }
    return `${username} just logged in`
}
// console.log(loginusermsg("khushi"));
console.log(loginusermsg());// we are not passing any value and it will give 'undefined'

// function calculatecartprice(...num1){ // this is rest operator
function calculatecartprice(val1, val2, ...num1){ // this will give output [500]
    return num1
}

console.log(calculatecartprice(200, 400, 500));// will get array

const user = {
    username: "khushi",
    price: 199 // here instead pf price will do prices will get undefined
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user) // we vcan also do as
handleobject({
    username: "ansh",
    price: 399
})

const munewarray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(munewarray));
console.log(returnSecondValue([200, 300, 400, 500]));

const useremail = []
if(useremail){
  console.log("got user email");
}else{
    console.log("don't have user email");
}

// falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

//"0", 'false', " ", [], {}, function(){}

// if(useremail.length===0){
//     console.log("array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("array is empty");
}
//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

//condition ? true : false

const iceteaprice = 100
iceteaprice<=80 ? console.log("less than 80") : console.log("more than 80")
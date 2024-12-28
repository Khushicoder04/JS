// if statement

 //const isuserLoggedIn = true
// const temperature = 41
// if(temperature<50){
//     console.log("less than 50");
// }
// console.log();
// if(2 === "2"){
//  console.log("executed");
// }
//<, >, <=, >=, ==, !=, ===

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);// this will give error


 //const bal = 1000
//  if(bal>500) console.log("rest");

// if(bal<500){
//     console.log("less the 500");
// }  else if(bal < 750){
//     console.log("less the 750");
// }else if(bal < 900){
//     console.log("less the 750");
// }else{
//     console.log("less the 1200");
// }

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true


if(userLoggedIn && debitcard){
    console.log("allow to buy");
}
if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("user logged in");
}
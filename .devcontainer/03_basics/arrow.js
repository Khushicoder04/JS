const user = {
    username: "khushi",
    price: 999,

    welcomemsg: function(){   // this represent current contest
        console.log(`${this.username} , welcome to website`)
        // console.log(this);
    }
     
}

// user.welcomemsg()
// user.username = "ansh"
// user.welcomemsg()

// console.log(this);

// function chai(){
//     let username = "khushi"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "khushi"
//    console.log(this.username);
// }
// chai()

const chai = () =>  {
    let username = "khushi"
   console.log(this.username);
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2    // explicit (using return)
// } 
// console.log(addtwo(3, 4));

// implicit return(see below) not write return statement
const addtwo = (num1, num2) => num1 + num2

const addtw = (num1, num2) => ({username: "khushi"})

console.log(addtw(3, 4));

const myarray = [2, 3, 4, 5, 6]
myarray.forEach()
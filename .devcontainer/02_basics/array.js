// Array
// resizeable, they are not associative array(can not be accessed by string)
// it make shallow copy
//deep copy - do not share the same reference
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["khushi", "ansh"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// ARRAY METHODS

myArr.push(6);
myArr.pop();

// myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

// SLICE, SPLICE

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)// it will not include 3

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

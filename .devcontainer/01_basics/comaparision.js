console.log(2>1);// >=, <. ==, !=
console.log("2">1); //true
console.log("02">1); //true

console.log(null > 0); //false (null is an empty value)
console.log(null == 0); //false
console.log(null >= 0); //true (value conversion)

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0); // all this give false

//comparision and equality checks are work differently in javascript

//strict check (===) strictly check the values means it checks it datatype also
console.log("2" === 2); //false
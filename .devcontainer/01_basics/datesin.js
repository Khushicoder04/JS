//dates:- objects thst represent a single moment in time in a platform independent format. beginning og january 1, 1970, UTC(the epoch).

let mydate = new Date()
// console.log(mydate);
//to convert in stirng
console.log(mydate.toString());// many more are there
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let myCreateDate = new Date(2023, 0, 23)// in javascript month starts from 0.
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default', {
    weekday: "long",
})
//singleton 
//object.create

//object literals

const mysym = Symbol("key1")


const jsuser = {     // IN OBJECT WE can defin eour own keya and values
    name: "khushi",
    "full name": "khushi rai", 
    [mysym]: "mykey1",
    age: 20,
    location: "hyd",
    eamail: "khushi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(jsuser.eamail);
console.log(jsuser["eamail"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);

jsuser.email = "khushirai@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "khushimicro@gmail.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());
//will discuss singleton
// const tinderuser = new Object()// singleton object
const tinderuser={} // non singleton object

tinderuser.id = "123ert"
tinderuser.name = "khushi"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "aaa2gmail.com",
    fullname: {
        userfullname: {
            firstname: "khushi",
            lastname: "rai"
        }
    }
}
console.log(regularuser.fullname);
const coding = ["js", "c", "c++", "java", "python"]

// coding.forEach( function name(item) { // foreach is a call back function
// console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) =>{
//     console.log(item, index, arr);
// })

const mycoding =  [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    }

]

mycoding.forEach((item) => {
    console.log(item.languagename);
    console.log(item.languagefilename);
})
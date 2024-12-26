//Immediately Invoked Function Expressions (IIFE)

// function chai(){
// console.log(`DB CONNECTED`);
// }
// chai()

// we can write like this
(function chai(){
    console.log(`DB CONNECTED`);
    })();

    // ( function code(){
    //     console.log(`DB CONNECTED`)
    // })()

    ( () => {
        console.log(`DB CONNECTED TWO`);
    })();

    ( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
    })('khushi')
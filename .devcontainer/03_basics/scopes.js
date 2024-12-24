// {} //we call this scope
// var c=300
let a=300

if(true){
    let a = 10
    const b = 20
    //var c = 30
    //console.log("inner: ", a);
}

for(let i=0; i<Array.length;i++){
    // const element =  array[i];
}


// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "khushi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
// console.log(website);

//two()

}

//one()

if(true){
    const username = "khushi"
    if(username === "hitesh"){
        const website = "youtube"
        //console.log(username + website);
    }
    // console.log(website);

}

// console.log(username);

//++++++++++++++++++++++++interesting concept++++++++++++

function addone(num){
    return num + 1
}
addone(5) // here if we take this to above the function it will execute and do not show error

const addtwo = function(num){
    return num +2

}
addtwo(5) //but here it will show error because we storing a value in some variable
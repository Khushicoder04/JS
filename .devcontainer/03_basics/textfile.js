//javascript execution context
// it is a single thread
// 1. global execution context
// 2. functional execution context
// 3. eval 

// it run it 2 phases :- memory creation and execution phase
// example
let val1 = 10
let val2 = 5
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let res1 = addnum(val1, val2)
let res2 = addnum(10, 2)

// process
// 1. global execution--->firstlt it will allocated by this
//2. memory phase :-- val1->undefined
                     //val2->undefined
                    // addnum-->undefined
                    //res1-->undefined
                    //res2-->undefined
//   execution phase:-- val1<--10
                       //val2<--5   
                       //addnum--->  it will create different execution context[new variable environment + exection thread]  this het deleted after all these work
                       //res1 = 15
                       //res2 = 
                       // memory phase  val1-->undefined
                                       //val2-->undefined
                                        //total-->undefined
                       // execution context    num1-->10
                                             //num2-->5
                                             //total-->15
                                             // after all this thew values goes to execution phase

// now again for last line of code  same thing

// now will see call text
// stack will do
// functions are first class citizens in js 
a()
// b()
// function declaration aka function statement 
function a(){
    console.log("a is called")
}

// function expression 
// we cannot access function expression before declaration
var b = function(){
    console.log("b is called")
}

// Anonymous function
// function(){

// }


// Named function
var abc = function xyz(){
    console.log("abc is called");
    console.log(xyz)
}
abc()


// difference between parameters and arguments
function sub(param1,param2){
    return  console.log(`subtraction of ${param1} & ${param2} :`, param1 - param2);
    // console.log(result);
    // return result
}
// this is arguments 
sub(3,2)


// first class function
// A first-class function in JavaScript is simply a function that can be treated like any other value. This means you can:

// -- Store it in a variable.
// -- Pass it as an argument to another function.
// -- Return it from a function.


// 1. Store a function in a variable

var greet = function(name){
    return `hii ${name}`
}

// 2. Pass a function as an argument to another function

var printGreeting = function(greetingFunction, name){
    console.log(greetingFunction(name))
}

printGreeting(greet,"shagun")

// 3. Return a function from another function

function createGreeting(){
    return function(name){
      return `hiii ${name}`;
    }
}
const newGreet = createGreeting()
console.log(newGreet("bablu don"))
// function alongs with  it lexical scope/environment is known as closures.
// A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. 

// In simpler terms:

// 1. It's a function inside another function.
// 2. It can use variables from the outer function.
// 3. It remembers these variables even when the outer function has finished running.

// In your example, `displayName` is a closure because it "closes over" the `name` variable from its outer function `makeFunc`. Even after `makeFunc` has finished executing, the returned `displayName` function still has access to `name`.

// This allows for data privacy and the creation of function factories, among other useful patterns in JavaScript.+++++++++++++++++++++++++++
 
function makeFunc() {
    const name = "Mozilla";  
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
console.log("getting undefined bcz of console.log",myFunc());

// function addx(x) {
//     console.log( "inside function addx()",x)
//     return function addy(y) {
//         console.log( "inside  function addy()",y)
//         return x + y;
//     }
// }
// // console.log("outside",x)
// // console.log("outside",y)
// const add5 = addx(5)
// const result = add5(4)
// console.log(result)


// interesting fact

// You're getting `undefined` because of how the `console.log()` and function return values work in JavaScript. Let's break it down:

// 1. The `displayName()` function inside `makeFunc()` doesn't return anything explicitly. In JavaScript, when a function doesn't have a return statement, it implicitly returns `undefined`.

// 2. The `console.log(name)` inside `displayName()` prints "Mozilla" to the console, but this doesn't affect the return value of the function.

// 3. When you call `myFunc()`, it executes `displayName()`, which prints "Mozilla" to the console.

// 4. However, since `displayName()` doesn't return anything, `myFunc()` also returns `undefined`.

// 5. The outer `console.log(myFunc())` then prints this `undefined` return value.


// To fix this if you want to return a value, you could modify the `displayName()` function to return the `name` instead of logging it:

// ```javascript
// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         return name;
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// console.log(myFunc()); // This will now log "Mozilla"
// ```

// This way, `myFunc()` would return "Mozilla" instead of `undefined`.
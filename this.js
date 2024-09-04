"use strict";

console.log(this)
// this keyword inside a functon the value depends on strict and non strict mode. 

// this in function scope
function x() {
    // the value depends on strict and non strict mode in function scope 
    console.log(this)
}
// what is the value of this keyword inside a function?
// the value of this keyword inside a function is undefined but because js has something known as this substitution the value of this keywords is replace with the globalObject


// this inside non strict mode -- (this substitution)
// if the value of this keyword is undefined or null this keyword will be replaced with global object only in non strict mode 

// this keyword value depends on how the function is called (window)
x()  //undefined in strict mode
window.x() //globalObject (window) in strict mode


// this insise a object's method
const obj = {
    name: "suraj",
    printName: function () {
        // this is reference to the obj object
        // console.log(this)
        // this.a refer to the obj.a 
        console.log(this.name)
    }
}

obj.printName()

const student = {
    name: "deepika",
}

// call method
obj.printName.call(student)

// this inside arrow functions 
// arrow function don't provide own this binding (it retains the value of the enclosing lexical context)
const obj2 = {
    name: "suraj",
    x: () => {
        // enclosing lexical context
        console.log(this)
    }
}

obj2.x()

// this inside nested arrow function 

const obj3 = {
    name: "suraj",
    x: function () {
        const y = () => {
            console.log(this)
        }
        y()
    }
}
obj3.x()

// this inside DOM elements => reference to HTMLelement
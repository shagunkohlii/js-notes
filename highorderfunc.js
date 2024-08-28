// A higher-order function in JavaScript is a function that either takes another function as an input or returns a function as its output. It's a way to make your code more flexible and reusable. For example, functions like `map`, `filter`, and `reduce` are higher-order functions because they work with other functions to perform tasks.

const radius = [2, 1, 3, 5];

const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

// const calculate = function (radius, logic) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

Array.prototype.calculate = function ( logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]))
    }
    return output;
}
console.log(radius.map(area))
console.log("area", radius.calculate(area))
// console.log("circumference", calculate(radius, circumference))
// console.log("diameter", calculate(radius, diameter))
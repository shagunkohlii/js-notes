const arr = [5, 1, 4, 2, 9];

const double = function (arr) {
    return 2 * arr
}
const triple = function (arr) {
    return 3 * arr
}
const binary = function (arr) {
    return arr.toString(2)
}

console.log(arr.map(double))
console.log(arr.map(triple))
console.log(arr.map(binary))

// practice examples

const users = [
    { firstName: "shagun", lastName: "kohlii", age: 21 },
    { firstName: "elan", lastName: "musk", age: 20 },
    { firstName: "aman", lastName: "kohli", age: 21 }
]


const usersOutput = users.map(x => x.firstName + " " + x.lastName)
console.log(usersOutput)
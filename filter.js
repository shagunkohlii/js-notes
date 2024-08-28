const arr = [5, 1, 4, 2, 9];


function isOdd(x) {
    return x % 2
}

// const filteroutput = arr.filter((x) => x%2)
const filteroutput = arr.filter(isOdd)
console.log(filteroutput)

// example of filter 

const users = [
    { firstName: "shagun", lastName: "kohlii", age: 21 },
    { firstName: "elan", lastName: "musk", age: 45 },
    { firstName: "aman", lastName: "kohli", age: 21 },
    { firstName: "asha", lastName: "kohli", age: 27 },
    { firstName: "ranvijay", lastName: "kohli", age: 7 }
];

function ageless20(x) {
    return x.age < 22
}
const agelessthan20 = users.filter(ageless20).map(x=> x.firstName)
console.log(agelessthan20)
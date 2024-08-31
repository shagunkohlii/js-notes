const arr = [2, 3, 4, 19, 5, 6]

// const findMax = function(arr){
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         } 
//     }
//     return max
// }
// console.log(findMax(arr))
// we have to use return in case of reduce function..

const max = arr.reduce((max, curr) => {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0)
console.log(max)

const sumOutput = arr.reduce((acc, curr) => acc += curr, 0)
console.log(sumOutput)

// examples of reduce
const users = [
    { firstName: "shagun", lastName: "kohli", age: 21 },
    { firstName: "elan", lastName: "musk", age: 45 },
    { firstName: "aman", lastName: "kohli", age: 21 },
    { firstName: "asha", lastName: "kohli", age: 27 },
    { firstName: "ranvijay", lastName: "kohli", age: 7 }
];

const usersAge = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(usersAge)

// find the first name whose age is less than  25

const ageless25 = users.reduce((acc,curr)=>{
    if(curr.age < 25){
        acc.push(curr.firstName)
    }
    return acc
},[])
 
console.log(ageless25)
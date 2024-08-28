// callback function 
// setTimeout( function(){
//     console.log("timer")
// }, 5000)

// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){
//     console.log("y")
// })

// closures along with eventLisners
// function attachEvenetListener() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function () {
//         console.log("clicked", ++count)
//     })

// }
// attachEvenetListener()

console.log("start")
setTimeout(function cb() {
    console.log("namaste")
}, 5000)
console.log("end")

console.log("what are you doing")
setTimeout(function x() {
    console.log("x is callback function ")
}, 20000)

console.log("nothing")
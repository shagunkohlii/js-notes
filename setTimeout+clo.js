// function clo() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function clock() {
//             console.log(i)
//         }, i * 1000)
//     }
// }
// clo()


// function clo() {
//     for (var i = 1; i <= 5; i++) {
//         function x(a) {
//             setTimeout(function clock() {
//                 console.log(a)
//             }, i * 1000)
//         }
//         x(i)
//     }
// }
// clo()

// in this code var print 6 6 6 6 6 bcz var has functional scope and the for loop function instanly exectures when loop becomes false i = 6  then it print 6 each time
function clo(){
    for(var i = 1; i<=5; i++){
           setTimeout(function clock(){
           console.log(i) 
           },i * 1000)
    }
}
clo()


// 1. `var`:
//    - Function-scoped or globally-scoped
//    - Can be redeclared and updated

// redeclared
var a = 10;
var a = 100;
console.log("var redeclared",a)

//   updated
var b;
b = 12;
console.log("var updated",b)
//    - Hoisted to the top of its scope e.g - it give undefined even before initialization.

// 2. `let`:
//    - Block-scoped
//    - Can be updated but not redeclared in the same scope
let letupdated;
letupdated = 999;
console.log("this is let updated example",letupdated)
//    - Not hoisted

// 3. `const`:
//    - Block-scoped
//    - Cannot be updated or redeclared
//    - Must be initialized at declaration
const abc = "this is initialized at declaration";
console.log(abc)

// const cbd
// cbd = "this is not initialized at declaration"
// console.log(cbd)


//    - Not hoisted 

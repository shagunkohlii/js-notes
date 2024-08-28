// lexical environment 
// lexical environment = local memory + lexical env of the parent
 
function a() {
    c();
    function c() {
        console.log(d)
    };
};
var d = 10;
a();

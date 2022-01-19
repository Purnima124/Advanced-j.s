function show(){
    var j="j a Local variable of outer Fuction";
    console.log(j )
    function innerFun(){
        var k="K a local variable of inner function";
        console.log(k)
        console.log(j)
    }
    innerFun()
    console.log(j)
    console.log(k)
}
show()

function add(){
    
}
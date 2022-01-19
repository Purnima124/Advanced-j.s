function show(){
    var j="j a Local variable of outer Fuction";
    console.log(j )
    function innerFun(){
        var k="K a local variable of inner function";
        console.log(k)
    }
    innerFun()
}
show()



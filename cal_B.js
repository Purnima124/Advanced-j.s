const fun1=()=>{
    setTimeout(()=>{
        console.log("fun1 is staring")
    },2000)
}
const fun2=()=>{
    setTimeout(()=>{
        console.log("fun2 is ending")
    },3000)
        
}
fun1()
fun2()
    
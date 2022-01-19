// function add(){
//     setTimeout(( )=>{
//         return new Promise(function(resolve,reject){
//             const e=require("readline-sync")
//             const num=e.questionInt("enter nmber")
//             if (num%2==0){
//                 console.log("even")
//                 resolve()
//             }else{
//                 console.log("odd")
//                 // reject()
//             }
//         })
//     },1000)
// }
// add()

// 2
// var a=[1,2,3,4]
// var v=[5,6,7,8]
// console.log(...a,...v)

//3
// async function add(){
//         console.log("hi how are you fireand");
//         const response =await("I am fine my diear friend")
//         console.log(response)
//     }
//     add()
//     console.log("okyy firend")
    
//     var name="purnima";
//     var lastName="kumari";
//     console.log(`My name is ${name} and my last name is ${lastName}`)
    

// async function add(){
//     console.log("sangita:Hiiii")
//     const response=await("ok my dear friend")
//     console.log(response)
// }
// add()
// console.log("sangita:How are you")
// console.log("purnima:I am fine and you")

// calback function

const r=require("readline-sync")
var num=r.questionInt("Enter number")
i=2
var n=[]
while (i<=num){
    b=1
    k=[]
    while(b<=10){
        k.push(i*b)
        b=b+1
    }
    i=i+1
    n.push(k)
}
console.log(n)
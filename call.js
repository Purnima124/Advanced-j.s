// function add(){
//     setTimeout(( )=>{
//         console.log("you can do anythink")
//     },2000)
// }
// function add2(){
//     setTimeout(()=>{
//         console.log("you are very nice")
//         add()
//     })
// }
// add2()

// async function add(){
//     console.log("hi how are you fireand");
//     const response =await("I am fine my diear friend")
//     console.log(response)
// }
// add()
// console.log("okyy firend")

// var name="purnima";
// var lastName="kumari";
// console.log(`My name is ${name} and my last name is ${lastName}`)

// function ok(){
//     return new Promise (function(resolve,reject){
//         setTimeout(()=>{
//             const mdd=true;
//             if(!mdd){
//                 console.log("your promise is has been resolve")
//                 resolve()
//             }else{
//                 console.log("your promise is has not been resolve")
//                 reject()
//             }
//         },2000)
//     })

// }
// ok().then(function(){
//     console.log("thanks for resolving")
// }).catch(function(error){
//     console.log("o on very bad"+error)
// })

// Promise

function add(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const a=true;
            if (a){
                console.log("your promise has been resolve")
                resolve()
            }
            else{
                console.log("your promise has not been resolve")
                reject()
            }
        },2000)
    })
}
add().then(function(){
    console.log("thanks for resolve")
}).catch(function(){
    console.log("very bad bro")
})





function sum(name,...args){
    // console.log(arguments);
    console.log(`Hello ${name} :`);
    let sum=0;
    for(let i in args){
        sum+=args[i];

    }
    console.log(sum);
}
sum("yahoo Baba",20,30,40)
sum("Ram kumar",55,44,40)



// person={
//     firstname:"kumar",
//     lastname:"nayak",
//     fullname:function(){
//         this.first+this+lastname
//     }
// }
// person.function()


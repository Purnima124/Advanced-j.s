function sum(name,course, ...args){
    console.log(`Hello ${name} of ${course} :`);
    let sum=0;
    for(let i in args){
        sum+=args[i];

    }
    console.log(sum);
}
sum("yahoo Baba","Btech",20,30,40)
sum("Ram kumar","BA",55,44,)
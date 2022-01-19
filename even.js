function add(){
    return new Promise(function(resolve,reject){
        setTimeout(( )=>{
            const mov=true;
            if(mov){
                console.log("your promise has been resolve")
                resolve()
            }
            else{
                console.log("your promise has not been reslve")
                reject()
            }
        },1000)
    })
}
add()
add().then(function(){
    var r=require("readline-sync")
    num=r.questionInt("Enter the number ")
    if(num%2==0){
        console.log(num,"even No.")
    }
    else{
        console.log(num,"odd No")
    }
}).catch(function(){
    console.log("ok")
})



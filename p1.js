function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if (error){
                console.log('your promise has been resolved')
                resolve();
            }
            else{
                console.log('your promise has not been resolved')
                reject('sorry not fulfilled')
            }
        },2000);

    })
}
fun1().then(function(){
    console.log("Harry:Thanks for resolve")
}).catch(function(error){
    console.log("Harry: very bad bro Reson:" + error)
})

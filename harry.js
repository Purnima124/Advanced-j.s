function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=> {
            const error=true;
            if (error){
                console.log("your promise has been resolve")
                resolve();
            }
            else{
                console.log("your promise has not been resolve")
                reject('sorry not fulfiled')
            }

        },2000);
    })
}
func1().then(function(){
    console.log("Harry :thanks for resolving")
    
}).catch(function(er) {
    console.log("Harry :Very bad bro.Reasom: "+er)
})




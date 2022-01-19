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

        },1000);
    })
}
func1().then(function(){
    var r=require("readline-sync")
    var num=r.questionInt("Enter the number ")
    var num2=r.questionInt("Enter the number2 ")
    for(i=num;i<=num2;i++){
        for(b=1;b<=10;b++){
            console.log(i,"*",b,"=",i*b)
        }
        console.log()
    }
    
}).catch(function(er) {
    console.log("Harry :Very bad bro.Reasom: "+er)
})
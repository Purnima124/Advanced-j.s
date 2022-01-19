// we are useing in callback anonymous function
const funA=()=>{
    setTimeout(function(){
        console.log("welcome FunA");
    },3000);
}
const funB=()=> {
    console.log("welcome FunB")
}
funA();
funB();






function add(){
    setTimeout(()=>{
        console.log("Purnima:-Hii sangita")
        setTimeout(()=>{
            console.log("Purnima:-how are you")
            setTimeout(()=>{
                console.log("sangita:-I am fine")
            },2000)
        },1000)
    },1000)
}
add()

// 2
function odd(){
    console.log("my name is john")
}
function even(){
    console.log("i am in mumbai")
}
even(odd())
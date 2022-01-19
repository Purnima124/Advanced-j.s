setTimeout(()=>{
    console.log("call to H.R")
    setTimeout(()=>{
        console.log("call to Dircter")
        setTimeout(()=>{
            console.log("information update")
        },1000)
    },5000)
},3000)
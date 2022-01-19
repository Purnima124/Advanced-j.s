function add(){
    return new Promise(function(){
        setTimeout(()=>{
            const show=true;
            if(show){
                console.log("your promise has been resolve")
                resolve()
            }
        })
    })
}
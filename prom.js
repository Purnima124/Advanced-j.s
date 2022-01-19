// task
// API student
// 1:2s rool;
// 2;2s name and age
const pobj1=new Promise((resolve,reject)=>{
    setTimeout(( )=>{
        let rool_no=[1,2,3,4,5];
        // resolve(rool_no)
        reject("Error while communicating")
    },2000)
});
pobj1.then((roolno)=>{
    console.log(roolno)
}).catch((error)=>{
    console.log(error);
})

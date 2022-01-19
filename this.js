// function sum(){
//     var add=2+2;
//     console.log("sum of two no. is"+ add);
//     console.log(this);
// }
// sum()

// 2

const thapa={
    name:"vinod thapa",
    qualif:"MCS",
    sum:function(){
        var add=2+2;
        console.log("sum of two no. is "+add);
        console.log(this)
    }
}
thapa.sum()
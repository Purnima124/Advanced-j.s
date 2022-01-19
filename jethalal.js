var jethalal={
    wife:"daya",
    age:30
}
var bidhe={
    wife:"madhavi",
    age:30
}
function poptlal(){
    console.log(this.wife+" will cook food")
}
poptlal.call(bidhe)
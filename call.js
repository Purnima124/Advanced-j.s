const youtuber1={
    name:"ThapaTechnical",
    cantent:"programming",
    feature:function(){
        console.log(`very friendly way of teaching .${this.name} is my fav ${this.cantent} channel1.`)
    }
}
// youtuber1.feature();
const youtuber2={
    name:"kuchbhi",
    cantent:"programming&log"
}
youtuber1.feature.call(youtuber2);




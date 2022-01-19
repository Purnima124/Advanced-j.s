const youtuber1={
    name:"ThapaTechnical",
    cantent:"programming",
    feature:function(rating,support){
        console.log(`very friendly way of teaching .${this.name} is my fav ${this.cantent} channel1.I will love to give ${rating}star.plaese ${support} ${this.name} channel1.`);
    }
}
// youtuber1.feature();
const youtuber2={
    name:"kuchbhi",
    cantent:"programming&log"
}
// youtuber1.feature.call(youtuber2,5,"subscribe");
youtuber1.feature.apply(youtuber2,[5,"subscribe"]);
let max=Math.max(1,2,3);
console.log(max);
let arrMax=Math.max.apply(null,[1,2,3,4,5,6]);
console.log(arrMax)



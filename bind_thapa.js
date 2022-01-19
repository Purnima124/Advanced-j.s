const youtuber={
    name:"thapatechnical",
    content:"programming",
    feature:function(){
        console.log(`My fev youtuber name is ${this.name}.He made video ${this.content} topic`)
    }
}
youtuber.feature();
let youtuberFun=youtuber.feature;
youtuberFun();
let youtuberFun2=youtuber.feature.bind(youtuber);
youtuberFun2()

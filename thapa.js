class students{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    biodata(){
        return `Hi I am  ${this.myname} I am ${this.myage} years and I am in class ${this.mycls} `
    }

}
class player extends students{
    constructor(name,age,cls,game){
        super (name,age,cls);
        this.mygame=game;
    }
    play_biodata(){
        return`${super.biodata()}. I am player of ${this.mygame}`
    }

}
let obj1=new player('vinod',26,'MCS football');
console.log(obj1.play_biodata());

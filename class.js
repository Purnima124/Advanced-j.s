class students{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    biodata(){
        console.log(`Hi I am  ${this.myname} I am ${this.myage} years and I am in class ${this.mycls} `)
    }
    
}
let obj1=new students('vinod',26,'MCS');
let obj2=new students('thapa',25,'BSC');
obj1.biodata();
obj2.biodata();


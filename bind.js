const user1={
    name:"purnima",
    age:23,
    print:function(){
        console.log(this.name)
    }
}
const user2={
    name:"Mina",
    age:20
}
const obj=user1.print.bind(user2)
obj()
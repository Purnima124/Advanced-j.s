var data=[
    {name:'daniel',age:45},
    {name:'jone',age:34},
    {name:'robert',age:null},
    {name:'jen',age:undefined},
    {name:null,age:undefined}
];
const newAge=data.filter((elem)=>{
    // console.log(elem.age)
    return elem.age != undefined;
})
console.log(newAge);




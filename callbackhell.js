const getRollNo=()=>{
    setTimeout(( )=>{
        console.log("api getting roll no")
        let rool_no=[1,2,3,4,5]
        console.log(rool_no)
        setTimeout(( rollno)=>{
            const biodata={
                name:"purnima",
                age:23
            }
            console.log(`my rool no is ${rollno} my name is ${biodata.name} and I am ${biodata.age} years old`)
            setTimeout((name )=>{
                biodata.gender='femail'
                console.log(`my rool no is ${rollno} my name is ${biodata.name} and I am ${biodata.age} years old. I am a ${biodata.gender}`)

            },2000,biodata.name);
        },2000,rool_no[1])

    },2000);
}
getRollNo()
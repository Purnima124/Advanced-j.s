function add(name,...number){
    console.log(`Hi ${name}`)
    sum=0
    for(let i of number){
        sum+=i
    }
    console.log(sum)
}
add("gopal",100,5000)
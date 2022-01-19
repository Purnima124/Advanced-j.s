async function test(){
    const response=await fetch("j.s/json_biodata")
    const students=await response.json();
    return students;
}
let a=test();
console.log();
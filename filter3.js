a=[4,20,6,8,3]
const result=a.filter(even)
function even(a){
  if(a%2==0){
    return a
  }
}
console.log(result)
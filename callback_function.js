const perOne=(friend,callfrnd)=>{
    console.log(`I am busy right Now.I am tolking to ${friend}. I wiil call back`)
    callfrnd();
}
const perTwo=() =>{
    console.log(`Hey what's up. I am call back you.`)
}
perOne("thapa",perTwo)


// const message1 = `This is a long message
// that spans across multiple lines
// in the code.`
// console.log(message1)

// function tagExample(strings) {
//     return strings;
// }
// // creating tagged template
// const result = tagExample`Hello Jack`;
// console.log(result);

const name = 'Jack';
const greet = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result = tagExample`Hello ${name}, How are you?`;

console.log(result);
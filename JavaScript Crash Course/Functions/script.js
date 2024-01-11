// Functions are block of code 

// Function needs declaration
// lets go through the example

// function addition(a, b){
//     return a + b;

// }
// // Function needs to be called 
// let result = addition(5, 10);
// console.log(result);

// function subtraction(a,b){
//     return a - b
// } 

// result = subtraction(10, 5);
// console.log(result);

// function multiplication(a,b){
//     return a * b
// }

// result = multiplication (5, 5)
// console.log(result);

// function division(a,b){
//     return a / b 
// }

// result = division(4, 2)
// console.log(result);

// How to declare a normal function 
// The only advantage of making a normal function is we can use "this" javascript built-in keyword 

function add (a,b) {
    return a + b
}

// how to call the above function 

const result = add(5, 10);
console.log(result);

// now how to call a private/anonamus function 

const sub = function (a,b) {
    return a-b
}
const result1 = sub(20, 5);
console.log(result1);

//  NOW how to call an arrow function which used 99% in industry and we can't use "this" built-in keyword here 

const multiply = (n) => {
    return n * n

}
const sum = multiply(5)
console.log(sum);

// we can write the arrow function in this format also if we have a single parameter so we cannot use paranthese but if we have multiple values in parameter we must have to use paranthese so it's good to use parantheese. 

const multiply1 = n => n * n 

const sum1 = multiply1(6)
console.log(sum1);

// write a greeting function
const sayHi = (name) => {
    console.log(`Hello Mr.${name} Welcome to SF`);
}

sayHi('Sphinx');

const goodBye = function (name) {
    console.log(`Byee byee ${name} see you soon`);
}

goodBye('Sphinx');
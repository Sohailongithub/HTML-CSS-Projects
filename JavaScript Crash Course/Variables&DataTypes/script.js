// Variable Naming 
//---------------------------------
// Variables should be named according to the following conventions:
// - camelCase for variables that are used within a single function. This is the standard convention
//   and makes it easy to distinguish between local and global variables.
// - PascalCase for constants, which are values or objects that will not change during runtime.
//   Constants are usually declared at the top of their respective file/module in all caps with
//   underscores separating words if necessary (e.g., MAX_VALUE).

// var name = "Hello, Sohail!";
// let name = "Hello, Sohail!";
const name = "Hello, Sohail";

console.log(name);


// String 

let singleQuote = 'Hello, I am a single quote';
console.log(singleQuote);

let doubleQoute = "Hello, I am a double quote";
console.log(doubleQoute);

let backticks = `Hello, I am a backtick quote and I am a dynamic string which means I have dollar sign and curly bracels and inside curly bracels I hold values for eg: 2+2 = ${2+2} `

console.log(backticks);

// We can also check the type of string using typeof keyword in console.log 

let typeOf = "Hello I am a string ";
console.log(typeof typeOf);

// Template literals / We called a dynamic string an Interpolation of string also both are same 

// Numbers 
// In javascript numbers and decimal numbers integers can easily defined it understand as numbers 

let wholeNumber = 5;
let floatNumber = 0.05;
let bigNumber = 1000000;
let smallNumber = 0.0000001;
let negativeNumber = -4;
console.log("Whole Number : ", wholeNumber);
console.log("Float Number: ", floatNumber);
console.log("Big Number : ", bigNumber);
console.log("Small Number :", smallNumber);
console.log("Negative Number : ", negativeNumber);

// Typeof operator returns a string indicating the type of value known as primitive data types
console.log(typeof wholeNumber)
// Operators used to perform operations on variables
console.log("Addition : ", wholeNumber + floatNumber);
console.log("Subtraction : ", wholeNumber - floatNumber);
console.log("Multiplication : ", wholeNumber * floatNumber);
console.log("Division : ", wholeNumber / floatNumber);
console.log("Modulus : ", wholeNumber % floatNumber); // It gives remainder after division  


// Booleans
// Boolean is a special data type that contains one of two values true or false
let boolValueTrue = true;
let boolValueFalse = false;
console.log("Boolean Value True : ",boolValueTrue);
console.log("Boolean Value False : ",boolValueFalse);
// Logical operators AND, OR , NOT
console.log("AND Operation : ", boolValueTrue && boolValueFalse ); // Returns false because
// if any part of expression is false then it will return false

const age = 22;

console.log(age > 20);

// Null 

let number = null;

console.log(typeof number);

number = 22

console.log(typeof number);

// undefined 
// undefined means a variable is present in the program but it's value is empty, Null is not provided so it will get us undefined.

let a;
console.log(a);
// type of undefined variable will get us undefined. 
console.log(typeof a);

// Objects (Important)
// onjects can hold complex data in it in keys and value pairs as mention below.

let person = {
    name: "John",
    age: 34,
    country: "USA"
}

// if we log here we will get the whole value with it's key and value pair. 
console.log(person);

// and if we want a specific data from an object we can use Dot notation and the variable name see the example below 
console.log(person.name);
// from this we will get only name because we use dot notation and mentioned name after the dot. 

// type of objects 
console.log(typeof person);
// this will return as an object 
console.log(typeof person.name);
// this will return the data type of the person.name which is string if we call person.age it will return number as type
console.log(typeof person.age);

// Array 
// Array is the collection of data it can have multiple data in it 

let arr = [1,2,3,4,5]
console.log(arr);

// arrays have index and we can call them by number index start with 0 to n;
console.log(arr[0]);

// type of array 
console.log( typeof arr);
// It will return as an object 

// ---------------------------Javascript is a dynamically typed language which means in one moment a variable can be a string and in other moment we can change the variable in a number;------------ Example below 

let javascript = 'Hello I am Javascript';

console.log(javascript);

javascript = 5 

console.log("Hello I am now change to ", javascript);

// Equality 

const x = 5;
const y = 10;

console.log(x == y);

// Logical Operators 

// AND &&
// All operands must be True or False 
console.log(true && true);
console.log(true && false);  
// OR ||
// Anyone operand must be true or false 
console.log(false||true)
console.log(false|| false);

// NOT ! 
// It will always recall oppsite of operands 
console.log(!true);
console.log(!false);


// Looping through Arrays 
// looping through arrays can be done by classical method of javascript loop and also it can be done by other methods which are 
//  foreach Loop, map, filter lets see one by one 

// classical method 

let arr = [1,25,15,78];

// for (let i = 0; i < arr.length; i++) {
//     const result = arr[i];
//     console.log(result);
    
// }

arr.forEach((index, value) => {
    console.log(index, value);    
}); 

//  for in Loops is used in context of objects
let obj = {
    a: "apple",
    b: "banana",
    c: "mango"
}


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element); 
    }
}

// summarise of for in loop 
// for constant key in object, if Object has its own property, Than Call Object and Key. And to save the value of Object and key we will make a new variable. And in that new variable we will call the object and its key


// for of loops is used in context of Arrays lets see it with an example 

let arr1 = [1,15,5,50];

for (const value of arr1) {
    console.log(value, arr1);
}

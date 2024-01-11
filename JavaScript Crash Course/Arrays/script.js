// Initialization of array how to initialize it 

let array = [1,2,3,4,5];

// Values which is inside an array called index 
// index always starts from 0 
// to call any specific value of array we can do that with the help of index 

console.log(array[4]);
console.log(array);
// type of array is an object 
console.log(typeof array);

// Now will learn push, pop, shift and unshift and splice in arrays
// push will always push a value in an array at the end point of the array
array.push(122);

// pop is used to delete a value from an array which is at the end point of an array  
array.pop();

// To add a value in an array at the starting point unshift is used 
array.unshift(1515);

// To remove a value in an array at the starting point shift is used 
array.shift();


// To remove a value which is in between an array we must use splice 
// The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @returns — An array containing the elements that were deleted.
// splice(start: number, deleteCount: number, ...items: number[]): number[]
array.splice(1,1, 15, 25); 


// concat will join the given arrays for eg:

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];

// It will return a new array it will not add into existing arrays 
console.log(a1.concat(a2, a3));

// sorting of array can be done by .sort() method 
// it will sort the array as per numerical series for eg 0 to n

let arr = [4,5,7,8,2,6,3]
console.log(arr);
console.log(arr.sort());

// Slice : It will slice an array means cut the array as per the given condition 

// slice(start?: number | undefined, end?: number | undefined): number[]
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

let arr1 = [1,2,3,4,5,6];
console.log(arr1);
console.log(arr1.slice(1,3));

// Reverse method What if we neeed an array to show its elements in Reverse format we can use reverse

let arrReverse = [1,2,3];
console.log(arrReverse);
console.log(arrReverse.reverse());


//how to declare an array
const myArr = [0,1,2,3,4,5]

const myHeros = ["Saktiman","Nagraj"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join(); // adds all the elemnts of an array to string
console.log(myArr);
console.log(newArr);//no change in the output but there is change in the type

console.log(typeof myArr)
console.log(typeof newArr)

// slice , splice
/**
 * slice() :Copies part of array..no change in the original array
 * splice():Adds/removes elements.....changes the original array
 */

console.log("A",myArr) // A [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3);
console.log(myn1);    // [1,2]
console.log("B",myArr)   // B[0,1,2,3,4,5]
const myn2 = myArr.splice(1,3);
console.log(myn2);  //[1,2,3]

console.log("C",myArr); // C[0,4,5]


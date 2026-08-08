"use strict"; // treat all js code as newer version

//always keep in mind the code readabilty should always be high
//for js documentation visit ----tc39.es and mdn

// Datatypes defines what kind of value a variable holds
/* 
   javascript has two main categories 

   1. Primitive Data types:--these are basic,immutable values:

      1. Number
      2. String
      3. Boolean
      4. undefined 
      5. null
      6. BigInt
      7. Symbol

    2. Non-Primitive( Reference Type)
       
       Everything Complex in IS is an Object:
        Array
        Function
        Dates

*/

let a=10;
let b= 3.14 // Numbers (can be integers & decimal)

let name="Aditi"; //String --->text inside the quotes
let islogged=true;// Boolean--->true/false


let x;  //Undefined-->variable declare but not assigned

let y = null;// Null-->intentional empty value

let big=1234569867575788575n; // BigInt-->for very large number

let sym = Symbol("id"); //Symbols-->unique identifiers(advanced use)


/*   to check the datatype of the variable we use 

     typeof

*/

console.log(typeof"Aditi")
console.log(typeof null)
console.log(typeof undefined)



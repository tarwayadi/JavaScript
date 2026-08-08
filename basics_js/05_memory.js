// first of all javaScript is a dynamically typed language

// there are two types of memory in javaScript -----> 1. Stack  2. Heap

let myName = "AditiAnand";
let mynickname = myName;

mynickname = "Aditi";

console.log(myName);      // AditiAnand
console.log(mynickname);  // Aditi

/*
--> Stack Memory (Primitive Types)
--> Stores actual value (copy)
--> changing mynickname will not affect myName
*/

// Heap Example
let userone = {
    email: "user@gmail.com",
    upi: "user@ybi"
};

let usertwo = userone; // correct assignment

usertwo.email = "abc@gmail.com";

console.log(userone.email); // abc@gmail.com 😮
console.log(usertwo.email); // abc@gmail.com

/**
 * ---> Heap Memory (Non-Primitive Types)
 * ---> Stores reference (address), not actual value
 * ---> Both point to the same memory location
 * ---> Changing one affects the other
 */
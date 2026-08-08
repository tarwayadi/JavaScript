const accountID=12345

let accountEmail="aditianad@gmail.com"
var accountPassword="3456"

accountCity="jaipur"


//accountID=2// it is not allowed in javascript
accountEmail="abc@gmail.com"
accountPassword="123456"
accountCity="Bengluru";

console.log(accountID)

console.table([accountID,accountEmail,accountPassword,accountCity])

/* important note: prefer not to use var because:

A. Function Scope (Not Block Scope)
   var is not block-scoped, which can cause unexpected bugs.
     if (true) {
      var x = 10;
      }
    console.log(x); // ✅ 10 (still accessible!)
    Even though x is inside if, it leaks outside.

    Now compare with let:
    if (true) {
    let y = 20;
     }
    console.log(y); // ❌ Error

    let respects block scope → safer


B.  Hoisting Issues
     
         var is hoisted and initialized with undefined, which can lead to confusing behavior
         console.log(a); // undefined
         var a = 5;

         This happens because JS internally treats it like:
         var a;
         console.log(a);
         a = 5;


         Now with let:
         console.log(b); // ❌ ReferenceError
         let b = 10;

         This prevents accidental usage before declaration

C. Global Scope Pollution
        

         When used globally, var attaches variables to the global object.
         var a = 10;

         n browser → becomes window.a

        ✔ This can create conflicts in large applications

*/


//so we should use : 
// const → default choice (for constants)
//let → when value changes
console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);


console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null>=0);
console.log(null==0);
/*  the reason is that an equality check == and comparison >,<,>=,<= work differently. Comparisons convert null to a number ,
treating it as 0. that is why null>=0 is true and null>0 is false. 
*/


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);


// strict check
// ===
/* No automatic conversion
   Safer and predictable  
   Checks both value AND data type */

console.log(5 === 5);     // true
console.log(5 === "5");   // false ❌ (different types)

const user = {
    username: "Aditi",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
    }
};

user.welcomeMessage();

user.username = "Anand"
user.welcomeMessage()// value yha pe isiliye change hua because humne value ko hard core nhi kiya tha

console.log(this); 
/**
 * node enviroment k andar hain 'this' refer kr rha hai context ko
 * global k andar abhi koi context hi nhi hai isiliye empty print ho rha hai
 */

function Chai()
{
    console.log(this);
}
//Chai();

/**
 * this in JavaScript refers to the object that is executing the current function, 
 * and its value depends on how the function is called, not where it is defined.
 *  When a regular function like Chai() is called in Node.js (non-strict mode), 
 * this refers to the global object, while in a browser it refers to the **window object;
 *  in **strict mode** ("use strict"), thisbecomesundefined. 
 * When a function is called as an **object method** (e.g., user.greet()), this refers to the
 *  object before the dot (user). When a function is called using the **newkeyword**,
 * thisrefers to the newly created object. 
 * **Arrow functions** do **not** have their ownthis; instead, they inherit thisfrom their
 *  surrounding (lexical) scope. Understanding these behaviors is essential because
 * this changes based on the way a function is invoked, and methods likecall(), apply(), and bind()`
 *  allow you to explicitly control its value.
 */

function dog(){
    let Name="germanSepherd"
    console.log(this.Name);
}
dog();

/**
 * this.Name returns undefined because Name is declared using let,
 *  which creates a local variable inside the dog() function, 
 * not a property of the object referred to by this. 
 * When JavaScript executes console.log(this.Name), 
 * it looks for a property named Name on this
 *  (which is the global object in Node.js non-strict mode or undefined in strict mode),
 *  but no such property exists, so it returns undefined. 
 * If you want to access the local variable, use console.log(Name) instead.
 *  If you want to use this.Name, then Name must be defined as a property of an object,
 *  such as this.Name = "germanShepherd" or inside an object like { Name: "germanShepherd" }.
 * 
 */


const addTwo = (num1 , num2)=>
    {
        return num1 + num2
    }
console.log(addTwo(3,4))  


const addtwo = (num1,num2) => num1 + num2
console.log(addtwo(5,6))

/**
 * Note::::
 * curly braces me wrap kiye to return statement likhna hoga aur agar parenthesis me
 * wrap kiye to zaroorat nhi hai
 */

const ln =(num1, num2) => {username:"aditi"}
console.log(ln(2,3))


const pn =(num1, num2) => ({username:"aditi"})
console.log(pn(2,3))

/**
 * Rule to remember: Arrow functions with {} require an explicit return,
 *  while arrow functions that directly return an object must wrap the object in parentheses ({ ... })
 *  to distinguish it from the function body.
 */

//CORRECT CODE

//const ln = (num1, num2) => {
  //  return { username: "aditi" };
//};

//console.log(ln(2,3));

//const pn = (num1, num2) => ({ username: "aditi" });

//console.log(pn(2,3));





//----------------------*************-----------------------------------------

/**
 * jaise hi humne function likha use turant invoke krvana hai.
 * kyu hume aisa function chahiye jo immediately execute ho jaaye?
 * 
 * An IIFE is a function that executes immediately after
 * it is defined. it is mainly used to create a private scope ,
 * avoid global variable pollution and run initialization code
 * exactly once.
 */


//function cha()
//{
    //console.log("DB Connected");
//}
//cha()   


//applying IIFE

//(function chail() {
    //console.log("DB Connect");
//})() //DB Connect


/**
 * Remember: A normal function is defined first and called later,
 *  whereas an IIFE is defined and executed immediately. 
 * This is why it is called an Immediately Invoked Function Expression.
 */

//in terms of arrow function

;(()=>{
    console.log("hello");
})();
/**
 * JavaScript automatically inserts semicolons in many cases
 *  (Automatic Semicolon Insertion), but IIFEs are one of the
 *  situations where relying on it can cause problems. 
 * That's why you'll often see IIFEs written with either:
 * 
 * 
 * (function () {
    // ...
   })();

  ;(() => {
     // ...
    })();
 */


//named IIFE
;((name)=>{
    console.log(`DB connected to ${name}`);
})("Aditi");




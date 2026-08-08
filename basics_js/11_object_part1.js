// singleton

// object literals

const JsUser = {
    name: "Aditi",
    age: 22,
    location: "Kolkata",
    email: "aditianand@google.com",
    isLoggedIn: false,
    lastloggedIn: ["Monday", "Saturday"]
};

// accessing the elements

console.log(JsUser.email);
console.log(JsUser["email"]);

/**
 * If property name contains spaces:
 * "full name": "Aditi Anand"
 * then dot notation won't work
 * we must use bracket notation
 */

// Symbol as object key

const mySym = Symbol("Key1");

const JUser = {
    [mySym]: "myKey1"
};

console.log(JUser[mySym]); // myKey1
console.log(typeof JUser[mySym]); // string

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)  // will not change anything


JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting()) // Hello Js User
console.log(JsUser.greeting)// function (anonymous)
/**
 * function execute nhi hua hai sirf function ka reference aaya hai
 */

//referencing the name in the object

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(JsUser.greetingTwo())
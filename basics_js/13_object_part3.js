//database se value 

const user =[
    {
        id :1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"xyz"
    }
]
//accessing the elements 
console.log(user[1].email);

const tinderUser = new Object // singleton object
console.log(tinderUser) // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // ['id' , 'name' , 'isloggedIn]
console.log(Object.values(tinderUser)) // ['123abc' , 'Sammy', false]

console.log(Object.entries(tinderUser))// return values in key-value pair
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//false


/**
 * Note: in file 12_object_part2.js assign() is a static method that copies all enumerable own properties 
 * from one or more source objects to a target object. It return the modified target object.
 */
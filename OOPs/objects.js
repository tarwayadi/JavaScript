function multiplyBy5(num)
{
    return num*5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power)//2
console.log(multiplyBy5.prototype)//{}

/**
 *isse hume ye samajh me aaya ki function ko bhi object k jaise behave krvaya jaa sakta hai 
  js me...

 *    
     FUNCTION---------
                      |
                      |
       ARRAY-------->Object-------->null
                     |
                     |
        STRING-------|

*/

function createUser(username, score){
    this.username = username
    this.score = score
} 

createUser.prototype.increment = function(){
    this.score++  //writing this is important 
    //because it is defining the context of the object we are refering to
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25)// new keyword is very important for this.
const tea = new createUser("tea", 250)

chai.printMe()
/**
 * Here's what happens behind the scenes when the new keyword is used:
 * A new object is created: The new keyword initiates the creation of new javaScript
 * object.
 * 
 * A prototype is linked: The newly created object gets linked to the prototype
 * property of the constructor function. this means that it has access to properties and 
 * methods defined on the constructor,s prototype.
 * 
 * The constructoris called: The constructor function is called with the specified
 * arguments and this is bound to the newly created object. If no explicit
 * return value is specified from the constructor, javaScript assumes this,
 * the newly created object, to be the intended return value,
 * 
 *  The new Object is returned: After the constructor function has been called, if it doesn,t
 * return a non-primitive value(object, array, function, etc.),the newly 
 * created object is returned.
 * 
 * 
 */



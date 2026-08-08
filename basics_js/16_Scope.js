/* let a = 10
const b = 20
var c = 30

console.log(a)
console.log(b)
console.log(c) */

/* if(true)
{
    let a = 10
    const b = 20
    var c = 30
}
console.log(a) // a is not defined
console.log(b) // b is not defined
console.log(c) //30 */

// if K andar jo bhi hai vo hai block scope
// aur uske bahar jo bhi hai vo hai global scope

// Global Scope me jo bhi likhenge vo block me available hoti hai but jo block me hai vo global nhi hoti


var  c = 300
if(true)
{
    let a = 10
    const b = 20
    var c = 30
}
console.log(c) //30

let a = 300
if(true)
{
    let a = 10
    const b = 20
    console.log("INNER :",a)
}
console.log(a); //300

// jab browser me check krte hain to  scope alag hai aur jab code enviroment 
//me check krte hain to alag hai


// Nested Scope

function one()
{
    const UserName = "Aditi"
    function two()
    {
        const website = "Youtube"
        console.log(UserName)
    }
    //console.log(website)  // out of the scope

    two() // Aditi
}
//one() // error

// if i comment two() then nothing will be printed

 if(true)
 {
    const UserName = "Aditi"
    if(UserName==="Aditi")
    {
        const website = "Youtube"
        console.log(UserName + website)
    }
    //console.log(website)// out of scope
 }

 //console.log(UserName) // out of the scope
 addone(5)
 function addone(num)
 {
    return num + 1
 }

 
 const addtwo = function(num)
 {
    return num + 2
 }
 addtwo(5)
 // if we run this no value will be printed

 /**
  * if we declare addone(5) before addone function there will be no error
  * now , if we declare addtwo(5) before expression addtwo
  * it will give error , reference error , cannot access addtwo before initialisation
  */
 
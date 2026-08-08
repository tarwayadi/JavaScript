let score = 33;
console.log(typeof(score));

//converting into number

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber)

//note if score="33abc" so this is the string wich can not be converted into string so the value of the type is NaN

/* "33"-->33
   "33abc"-->NaN
   true-->1: false-->0

   */

//converting into string

let SomeNumber=56
let StringNumber = String(SomeNumber);
console.log(StringNumber);
console.log(typeof(StringNumber))


//converting into boolean

let isLoggedIn = 1
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn)
//1-->true  : 0-->false
// ""-->false
//"Aditi"--->true




//*******************operation*****************/


let value=3
let negative=-value
console.log(negative)

let str1="Aditi"
let str2= " Anand"

let str3= str1 + str2
console.log(str3)
console.log("1" + 2) 
console.log(1 + "2")
console.log("!" + 2+2)
console.log(1 + 2 + "2")

console.log(+true)
console.log(true)
console.log(+ "")

let GameCounter = 100
GameCounter++
console.log(GameCounter);

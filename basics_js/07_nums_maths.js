const score = 400
console.log(score) //400

// defining 
const balance = new Number(100)
console.log(balance) //[Number:100]

console.log(balance.toString()) // if we use tyoeof then type of balance would be string

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.5687
console.log(otherNumber.toPrecision(3));
// keep in mind to use it effetively because priority will be given to the first n character you mention

const hundred = 1000000
console.log(hundred.toLocaleString()) // according to US standard
console.log(hundred.toLocaleString('en-IN')) // according to Indian standard

/**
 *  Number.MIN_VALUE
 *  Number.MAX_VALUE
 *  Number.MAX_SAFE_INTEGER
 */

///////////////////////////////////// Maths////////////////////////////////////

console.log(Math) // object [Math] {}---> lots of functions if you see in browser


console.log(Math.abs(-1))
console.log(Math.abs(1))
console.log(Math.round(4.98))
console.log(Math.ceil(4.45))
console.log(Math.floor(4.45))
console.log(Math.sqrt(25))
console.log(Math.pow(2,8))
console.log(Math.min(2,3,4,5))
console.log(Math.max(2,3,4,5))


//IMPORTANT **

console.log(Math.random())// values lie between 0 & 1
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1)) + min)
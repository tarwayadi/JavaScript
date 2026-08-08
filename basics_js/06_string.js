//strings can be denoted in '' as well as ""

const name="Aditi"
const namecount=50
console.log(name + namecount + "Anand" )//old way of writing

console.log(`Hello my name is ${name} and my namecount is ${namecount}`)
// modern way of writing

// string creation
const gameName = new String("Aditi Anand Tarway")

console.log(gameName[0])
console.log(gameName.__proto__);
/**
     in browser console, an expandable object containing methods like:

     charAt()
     includes()
     toUpperCase()
     slice()
     trim()
 */

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newName = gameName.substring(0,6)
console.log(newName)// Substring cannot have negative values

const anotherString = gameName.slice(-11,4)
console.log(anotherString)

const newstringone = "  aditi  "
console.log(newstringone.trim())

const abc =" hi%20mynameisaditi"
console.log(abc.replace('%20','-'))

console.log(gameName.includes('Tarway'))

//converting a string to an array

console.log(gameName.split(" "))

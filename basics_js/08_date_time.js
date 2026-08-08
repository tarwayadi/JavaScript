let MyDate = new Date();
console.log(MyDate);

console.log(MyDate.toString())
console.log(MyDate.toDateString())
console.log(MyDate.toISOString())
console.log(MyDate.toJSON())
console.log(MyDate.toLocaleString())
console.log(MyDate.toLocaleDateString())


console.log(typeof MyDate);


let myCreatedDate = new Date (2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());



//////////////////////////////////// timestamp//////////////////////////


let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myCreatedDate2.getTime());

console.log(Date.now()) // in milliseconds
console.log(Math.floor(Date.now()/1000)) // in second

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

//**important */
console.log(newDate.toLocaleString('default',{weekday:"narrow"}))


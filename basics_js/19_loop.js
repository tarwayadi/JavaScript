//for loop

for(let i=0;i<10;i++)
{
    const element = i;
    console.log(element);
}

//another example
console.log("\n")

for(let i=0;i<=10;i++)
{
    const element = i;
    if(element == 5)
    {
        console.log("5 is best number")
    }
   console.log(element)
}

console.log("\n");

//nested loop

for(let i=0;i<=10;i++)
{
    console.log(`outer loop value:${i}`)
    for(let j=0;j<=10;j++)
    {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
}

console.log("\n");

//break and continue
for(let i=1;i<=20;i++)
{
    console.log(`value of i is ${i}`)
    if(i==5)
    {
        console.log("detected 5");
        break;
    }
}

console.log("\n");
for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("detected 5")
        continue
    }
    console.log(`value of i is ${i}`)
}

console.log("\n")


//while and do while loop

let i=0;
while(i<=10)
{
    console.log(`value of inde is ${i}`);
    i=i+2
}

console.log("\n")


let myArray = ['flash',"batman","superman"]
let arr = 0
while(arr<myArray.length)
{
    console.log(`value is ${myArray[arr]}`)
    arr=arr+1
}

console.log("\n");

//do...while loop


let score = 1
do{
    console.log(`score is ${score}`);
    score++;
} while(score<=10)

console.log("\n");


//high order Array Loops

//for of

const Arr = [1,2,3,4,5]
for(const num of Arr){
    console.log(num);
}


const greetings = "hello World";
for(const greet of greetings)
{
    console.log(`Each char is ${greet}`);
}

console.log("\n");

// for in

const myobject = {
    js:'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}

for(const key in myobject)
{
    console.log(key)
}

for(const key in myobject)
{
    console.log(myobject[key])
}

//for in loops can also be used in array

const programming =["js","rb","py","java","cpp"]

for(const key in programming)
{
    console.log(programming[key])
}
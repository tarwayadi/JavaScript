const myMap = new Map()
myMap.set('a',1)
myMap.set('b',2)
myMap.set('c',3)

console.log(myMap)


//applying loop in the map
for(const key of myMap)
{
    console.log(key)
}

for(const [key,value] of myMap)
{
    console.log(key, ":-", value)
}

const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function(val)
{
    console.log(val)
})

//using arrow function
coding.forEach((item)=>{
    console.log(item);
})

//another method
function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe);



const myNums=[1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter((num)=>num>4)
console.log(newNums)




const Nums = [];

myNums.forEach((num) => {
    if (num > 4) {
        Nums.push(num);
    }
});

console.log(Nums);


//reduce 

const array1 =[1,2,3,4]
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator,CurrentValue)=>accumulator + CurrentValue,
initialValue);
console.log(sumWithInitial)
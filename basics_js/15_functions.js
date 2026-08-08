function SayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("I");
}

//reference

SayMyName()

// functions to add two numbers

function Add2Number(n1, n2)
{
    console.log(n1 + n2)
}

Add2Number(3,4);


// jab bhi function ka defination banate hain aur uske andar jo bhi input lete hain use parameters bolte hain
//jab function call krte hain to uske andar ka parameter ko argument hota hai


/*const result = Add2Number(4,5);
  console.log("Result :",result);
  //8 
  // result :undefined


*/



function addNo(n1, n2)
{
    return n1 + n2;
}
const result = addNo(4,5);
console.log("Result :", result)


// first method

function LoginUserMessage(UserName)
{
    return `${UserName} just logged in`
}

console.log(LoginUserMessage("Aditi")) //Aditi just logged in.
console.log(LoginUserMessage()) //Undefined just logged in.

// second method


function LoginUserMessage(UserName)
{
    if(UserName === undefined)
    {
        console.log("Please enter to UserName")
    }
    return `${UserName} just logged in `
}

console.log(LoginUserMessage);

/**
 * ek tarika aur hai
 * while declaring function just write by default volume of username. so if the user does not 
 * write his or her name then default value will be printed if they write the name then their name will be printed.
 * 
 */

function LoginUserMessage(UserName = "Aditi")
{
    return `${UserName} just logged in`
}
console.log(LoginUserMessage)

// we can face a situation where we do not know how many argument we will be facing

//Rest operator

function CalculateCartPrice(...num1)
{
    return num1;
}

console.log(CalculateCartPrice(200, 400, 500, 600));

//[200,400, 500, 600]

const user ={
    UserName : "Adit",
    price : 199
}

function handleObject(anyObject)
{
    console.log(`UserName is ${anyObject.UserName} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({UserName : "Aditi",
    Price :100
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


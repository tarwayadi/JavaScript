//if

//if(condition)
//{

//}

const isUsserLoggedIn = true;
if(isUsserLoggedIn)
{
    console.log("Executed");
}

//if....else

const temp=4;
if(temp===4)
{
    console.log("less than 50");
}
else
{
    
    console.log("greater than 50");
}

///important

const score = 200;
if(score>100){
    const power = "fly";
    console.log(`User power : ${power}`)
}
//console.log(`User power : ${power}`)  //error

/**
 * let and const are block-scoped, which prevents accidental access or modification
 *  outside their intended block. var is function-scoped, can be redeclared, 
 * and may lead to bugs because it isn't limited to blocks like if, for, or while.
 */


//switch

/*  switch(key)
{
    case value:
        break;
    case value:
        break;
    default
        break;
} */

        //truthy and falsy


const userEmail="Aditi@gmail.com"
if(userEmail)
{
    console.log("got user email");
}
else{
    console.log("don't have user email")
}



//falsy values

//false,0,-0,BigInt,"",null,undefined,NaN


//truthy values
//"0" , 'false', " ",[],{},function(){}

//if objects are empty

const emptyObj = {}
if(Object.keys(emptyObj).length===0)
{
    console.log("object is empty")
}


//NULLISH COULESCING OPERATOR  (??) : null undefined

let val1;
val1=5??10
console.log(val1);//5
val1=null??10
console.log(val1) //10
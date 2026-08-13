//how to make promise


//are there still reason to use promise libraries like Q or BlueBird
// now that we have ES6 promises?

// study the article on stack Overflow
// study ---> BlueBird vs Native vs Async/Await--state of promises

const promiseOne = new Promise(function(resolve, reject){
      //Do an async task
      //DB calls, cryptography, network
      setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
      },1000)
})

//how to consume this promise

promiseOne.then(function(){
    console.log("Promise consumed")
})

// we haven't added the resolve() then the output was: Async task is complete
// when we added the resolve() then the output was:
// Async task is completed 
// promise consumed

//ANOTHER METHOD

new Promise(function(resolve, reject){
    setTimeout(function()
{
    console.log("Async task 2");
    resolve()

}, 1000)

}).then(function(){
    console.log("Async 2 resolved")

})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function()
            {
                resolve({username: "chai", email : "chai@example.com"})
            },1000)
})

promiseThree.then(function(user)
{
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:"Aditi",password : "12996"})

        }
        else{
            reject('ERROR: Something went wrong')
        }

    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)

})
.catch(function(error)
{
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))

// if error is true : output--> ERROR: Something went wrong
// if error if false : output--> Aditi


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve({username:"JS",password : "123"})

        }
        else{
            reject('ERROR: JS went wrong')
        }

    },1000)
})
// now we will use another way not .then()

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error)
    {
          console.log(error)
    }
}
consumePromiseFive()



 /*async function getALLUsers(){
   try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response)
        //const data = response.json()
        //console.log(data)
   }
   catch(error)
   {
    console.log("E: ",error)
   }
}
getALLUsers() // this will give the needed output but not in the good format
*/

/*async function getALLUsers(){
   try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        const data = await response.json()
        console.log(data)
   }
   catch(error)
   {
    console.log("E: ",error)
   }
}
getALLUsers() // it will give the needed output in readable format
*/

// let's understand the same code with then() and catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))


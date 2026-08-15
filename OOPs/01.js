const user={
    username:"aditi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log('username: ${this.username}');
        console.log(this)
    }
}
console.log(user.username)
console.log(user.getUserDetails());
console.log(this);



//constructor function
//const promiseOne = new Promise()
//const date = new Date()

// this new keyword is constructor function ye allow krta hai ki aap 
//ek hi object se multiple instances bna sako
//naya context bnane k kaam me aata hai

function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this// even if we do not write this line its implicitly mentioned
}

const userOne = User("Aditi",12,true)
// support we take another user
const userTwo = User("chaiAurCode", 11, false)// this will print the data of user two
//data will be overriden
console.log(userOne);

// if we want this problem to not happen then we have to 
//use new keyword
const UserOne =  new  User("Aditi",12,true)
const UserTwo = new  User("chaiAurCode", 11, false)
console.log(UserOne);

//new keyword:
//jaise hi new use krte hain to ek empty object create hota hai usko instance bolte hain
// ek constructor function call hota hai aur jitne bhi arguments vagerah hote hain vo apko pack krke de deta hai
// this keyword jo hai usme jo bhi arguments humne likhe hain vo sab usme inject ho jaat hai
// function value return kr deta hai



//read about  instanceof 
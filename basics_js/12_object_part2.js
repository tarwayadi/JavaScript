//object constructor

const tinderUser = new Object // singleton object
console.log(tinderUser) // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // {id:'123abc' , name :'Sammy', isloggedIn : false}

const regularuser = {
    email : "Some@gmail.com",
    fullname : {
        userfullname : {
            firstname :"Aditi",
            lastname : "Anand"
        }
    }
}

console.log(regularuser.fullname)
// {userfullname : {firstname : 'Aditi', lastname : 'Anand'}}

console.log(regularuser.fullname.userfullname);
//{firstname : 'Aditi' , lastname :'Anand'}

const obj1 = {1 :"a",2 :"b"}
const obj2 = {3 :"a",4 : "b"}

const obj3 = {obj1,obj2}
console.log(obj3)
// {obj1 : {'1' : 'a', '2': 'b'}, obj2 : {'3' :'a','4' : 'b'}}

const obj5 = Object.assign({},obj1,obj2)
console.log(obj5)
//{'1':'a','2':'b','3':'c'}

const obj4 = {...obj1 ,...obj2}
console.log(obj4)
//{'1':'a','2':'b','3':'c'}
//database se value 

const user =[
    {
        id :1,
        email:"abc@gmail.com"
    },
    {
        id:2,
        email:"xyz"
    }
]
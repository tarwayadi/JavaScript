//let myName = "hitesh"

//console.log(myName.truelength);
 // this can be performed using .trim().length
//but our goal is to prepare a method so that it can be applied to any 
//string directly


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function()
    {
        console.log('spidy power is $(this.spiderman}');
    }
}
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")
}


//heroPower.hitesh()
myHeros.hitesh()

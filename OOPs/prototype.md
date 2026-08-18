# Prototypal behaviour in JavaScript
    -->In JavaScript, objects can access properties and methods from another object through a special connection called a prototype.

    example:
            const user = {
            name: "Aditi",

            greet() {
                console.log(`Hello ${this.name}`);
            }
        };

        user.greet();

here , user has its own :
      
        name
        greet()

But JavaScript objects can also have access to properties/methods that they don't directly contain.

That's where the prototype comes in.


# what is prototype?
    -->Every normal JavaScript object has an internal connection to another object called its prototype.

    its like:
          user
            ↓
     prototype object
            ↓
    another prototype
            ↓
           null


If JavaScript doesn't find a property on user, it can look for that property in its prototype.
   
1. Example with an Array

Consider:

        const arr = [1, 2, 3];
        arr.push(4);

You might wonder:

Where did push() come from? We didn't define it!

Exactly.

push() is available through the array's prototype.

Conceptually:

            arr
            ↓
            Array.prototype
            ↓
            Object.prototype
            ↓
            null

Array.prototype contains methods such as:

push()
pop()
map()
filter()
forEach()

So:

arr.push(4);

works because JavaScript can find push() through the prototype chain.

2. What happens when JavaScript searches for a property?

Suppose:

            const user = {
                name: "Aditi"
            };
            console.log(user.toString());

You didn't create toString() inside user.

So JavaScript searches:

            user
            ↓
            Object.prototype
            ↓
            toString()

It finds toString() in Object.prototype.

This searching process is called the prototype chain.









6. What is Prototypal Inheritance?

Now we can understand prototypal inheritance.

Prototypal inheritance is when one object gets access to the properties and methods of another object through the prototype relationship.

Example:

const animal = {
    eat() {
        console.log("Animal is eating");
    }
};


const dog = Object.create(animal);


dog.bark = function () {
    console.log("Dog is barking");
};

Now:

dog.bark();

Output:

Dog is barking

bark() belongs directly to dog.

But:

dog.eat();

also works!

Why?

dog
 ↓
animal
 ↓
eat()

dog doesn't have eat() itself, so JavaScript looks at its prototype, which is animal.

7. Visualizing Prototypal Inheritance
        animal
          │
          │ prototype
          ↓
          dog

animal has:

eat()

dog has:

bark()

Therefore dog can use both:

dog.eat();
dog.bark();

Because:

dog
 ├── bark()        ← own property
 │
 └── prototype
       └── eat()   ← inherited
8. Object.create()

One of the easiest ways to demonstrate prototypal inheritance is:

const animal = {
    eat() {
        console.log("Eating");
    }
};


const dog = Object.create(animal);

Here:

Object.create(animal)

creates a new object whose prototype is animal.

Therefore:

dog.eat();

works.

You can check it conceptually:

console.log(Object.getPrototypeOf(dog) === animal);

Output:

true
9. Prototype Chain

Prototypes can themselves have prototypes.

For example:

const animal = {
    eat() {
        console.log("Eating");
    }
};


const dog = Object.create(animal);

The chain looks like:

dog
 ↓
animal
 ↓
Object.prototype
 ↓
null

If you ask for:

dog.toString();

JavaScript searches:

dog
 ↓
animal
 ↓
Object.prototype
 ↓
find toString()

That's the prototype chain.

10. class and Prototypes

This is VERY important.

You might think JavaScript classes work exactly like Java/C++ classes.

But JavaScript's class syntax is built on top of its prototype system.

For example:

class User {
    greet() {
        console.log("Hello");
    }
}

Create an object:

const user1 = new User();

Then:

user1.greet();

Where is greet()?

It is available through:

user1
  ↓
User.prototype
  ↓
greet()

Conceptually:

User
 ↓
User.prototype
 ↓
greet()


user1
 ↓
User.prototype

So when you call:

user1.greet();

JavaScript finds greet() through User.prototype.

11. Constructor Functions and Prototypes

You'll also see this older/common JavaScript pattern:

function User(name) {
    this.name = name;
}


User.prototype.greet = function () {
    console.log(`Hello ${this.name}`);
};

Now:

const user1 = new User("Aditi");


user1.greet();

The chain is:

user1
  ↓
User.prototype
  ↓
greet()

This is prototypal inheritance.

12. __proto__ vs prototype

This confuses almost everyone initially, so remember this distinction.

prototype

Usually associated with constructor functions/classes:

User.prototype

It is the object that instances can inherit from.

__proto__

Refers to an object's prototype:

user1.__proto__

For example:

user1.__proto__ === User.prototype

is conceptually:

true

However, in modern code, prefer:

Object.getPrototypeOf(user1)

instead of directly using __proto__.

⭐ The easiest way to remember
Prototypal behaviour

If an object doesn't have something, JavaScript can look up its prototype for it.

object
  ↓
prototype
  ↓
prototype's prototype
  ↓
null
Prototypal inheritance

An object can reuse/access properties and methods from another object through the prototype chain.

animal
  ↓
prototype of
  ↓
dog

So:

dog.eat();

can work even when eat() isn't directly inside dog.

🔥 One final example
const animal = {
    eat() {
        console.log("Eating");
    }
};


const dog = Object.create(animal);


dog.bark = function () {
    console.log("Barking");
};


dog.eat();
dog.bark();

Output:

Eating
Barking

Because:

dog
 ├── bark()        ← own
 │
 └── animal        ← prototype
      └── eat()    ← inherited

That's the core idea of JavaScript's prototypal inheritance.


console.log("Hello world")  


// Global context


console.log("GLobal")
console.log(this) // in browser this === window

// nodejs -> module.exports

// strict mode -> undefined





// function test() {
//     console.log(this)
// }

// test()


// const user = {
//     name : "John",
//     inner : {
//         name : "Lol",
//        greet() {
//         console.log(this.name)
//     }
//     }
// }


// user.greet()


// note

// const us = user.inner.greet // the this in the greet will lose it context and this will get the global which is undefined



// contructor


// function Person(name) {
//     this.name = name
// }

// const p = new Person('Test');

// console.log(p.name)




// class Car {
//     constructor(model) {
//         this.model = model
//     }
// }


// const c = new Car("Tesla")

// console.log(c.model)





// const user = {
//     name : "Jane",
//     greet : function() {
//         console.log(this.name)
//     }
// }

// user.greet()


// event handlers 

// huge differences


// document.getElementById('test')?.addEventListener('click', function () {
//     console.log(this) // element that was click
// })

// document.getElementById('test')?.addEventListener('click', () => {
//     console.log(this) // element of an outer
// })





// timeout

// setTimeout(function() {
//     // console.log(this) window in the browser
// })


// <button onclick="console.log(this)"> -> 'this' is button element







// Typescript


//  Explicit this


// function greet(this : {name : string})  { // 'this' -> is a fake first parameter, it ensures correct
//     console.log(this.name)
// }

// greet.call({name : "John"})



// Typing with object

// type User = {
//     name : string,
//     greet(this : User) : string; // this is similar type to 'this : {name : string}; params
// };

// const user : User = {
//     name : "John",
//     greet() {
//         // console.log(this.name)
//         return this.name
//     }
// }


// console.log(user.greet())



// class User {
//     constructor(public name : string) {}



//     greet = () => {
//         console.log(this.name)
//     }
// }

// const u = new User("Anna")
// const fn = u.greet
// fn()


// class User {
//     name : string
//     constructor(name : string) {
//         this.name = name
//     }

//     greet() {
//         console.log(this.name);
//     }
// }


// const u = new User("Nine")
// u.greet()




type Identity = {
    value1 : string,
    value2 : number
}

function identity<T extends Identity>(value : T) : string { // T extends Identity  -> allowing constraint
    // it makes Identity structure pure
    // without constraint Identity is ignored
    console.log('Value --> ', value.value1)
    return value.value1
}


// this also works
// function identities<T extends {value1 : string}>(value : T)  {   
//     console.log('Value --> ', value.value1)
//     return value.value1
// }


console.log(identity({
    value1 : "value1",
    value2 : 20232
}))
// console.log(identity(123))





// applying bind


// reach this kinds of level
function bind<T, A extends any[], R>(fn :(this : T, ...args : A) => R, context : T){
    return (...args: A) => fn.apply(context, args)
}

// Generic types 

type Data = {
    age : number,
    name : string
}

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]


function testData<D extends Data>(d : D) {
    return d
}
console.log(testData<Data>({age : 10, name : "John"}))



// Class Implementation 

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10




// Type alias generic

type Wrapped<T> = {value : T}

const wrapped : Wrapped<number> = { value : 10}


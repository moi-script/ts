

// number
// string
// boolean
// void
// any
// unknown
// undefined
// null
// never


function print(args : any) : void{
    console.log(args)
}




function processValue(value: unknown) {
    // value is now treated as string
        // console.log(value.toUpperCase()); // you can use this without type safety

    if(typeof value === "string") {
        console.log(value.toUpperCase()); // now you can use this with type safety

    }
}


// processValue("test")



// never and void is opposite to each other



function greet() : void {
    console.log('Hello world')
}

console.log(greet()) // returns undefined


function loopGreet() : never {
    while (true) {
        console.log("Execute")
    }
}

// console.log(loopGreet()) // returns nothing because it does not reach the } brace 

// use for error handling


function filterInput(input : unknown) : never {
    throw new Error(`${input} is not a number : not valid input` );
}


const input : string = 'Hello';


// if(typeof input !== 'number') {
//     filterInput(input)
// }



// case statement


// type Shape = "circle" | "square" | "triangle"; // this will throw in error since triangle never happened in switch
type Shape = "circle" | "square" ;


function area(shape: Shape) {
  switch (shape) {
    case "circle": return 1;
    case "square": return 2;
    // case "triangle": return 3;
    default:
      // If we add 'triangle' to Shape later, this line will throw a 
      // compile-error because 'triangle' cannot be assigned to 'never'.
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// area('circle')




// undefined | null



// optional parameters 

function greetPerson(name?: string) {
    return `Hello ${name || 'stranger'}`
} 


// console.log(greetPerson())


// Nullish Coalescing and Optional Chaining


let inp = undefined  
const value1 = inp ?? "default"; // this default if inp is undefined


type User = {
    address : string,
    phone : number,
    empt : undefined
}

const user : User = {
    address : "general trias",
    phone : 23000,
    empt : undefined
}

const street = user?.empt; // safely acces the property
print(street)

// const username = user?.profile?.details?.nickname ?? "Guest"; // best value safety checking 



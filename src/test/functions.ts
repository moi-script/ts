function print(ars : any) : void {
    console.log(ars)
}



// Void return type

// Parameters
// Default Parameters

function test(arg : number, value : number = 1000) :void {
    console.log(arg, value)
}  



// Named Parameters

interface type1 {
    dividend : number
}

interface type2 extends type1 {
    divisor : number
}

const argsOperator : type2 = {
    dividend : 10,
    divisor : 2
}
function divide({ dividend, divisor }: { dividend: number, divisor: number }) { // destructureing object from arg
  return dividend / divisor;
}

print(divide(argsOperator))



// Rest Parameter

function add(a: number, b: number, ...rest: number[]) { // rest auto accepts ars as arrays 
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// add(10, 20, 40, "hello")






// Type alias 



type Negate = (value: number) => number; // get the param type and return types

const negateFunction: Negate = (value) => value * -1; // we can use type as variable to store 
// type like this also retunr a number type




// Casting 

let x: unknown = 100; // we always use as when it have unknown type first 
console.log((x as string).length); //casting using "as"

// Force casting
//  To override type errors that TypeScript may throw when
//  casting, first cast to unknown, then to the target type.





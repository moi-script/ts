// number
// string
// boolean
// void
// any
// unknown
// undefined
// null
// never
function print(args) {
    console.log(args);
}
function processValue(value) {
    // value is now treated as string
    // console.log(value.toUpperCase()); // you can use this without type safety
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // now you can use this with type safety
    }
}
// processValue("test")
// never and void is opposite to each other
function greet() {
    console.log('Hello world');
}
console.log(greet()); // returns undefined
function loopGreet() {
    while (true) {
        console.log("Execute");
    }
}
// console.log(loopGreet()) // returns nothing because it does not reach the } brace 
// use for error handling
function filterInput(input) {
    throw new Error("".concat(input, " is not a number : not valid input"));
}
var input = 'Hello';
function area(shape) {
    switch (shape) {
        case "circle": return 1;
        case "square": return 2;
        // case "triangle": return 3;
        default:
            // If we add 'triangle' to Shape later, this line will throw a 
            // compile-error because 'triangle' cannot be assigned to 'never'.
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
// area('circle')
// undefined | null
// optional parameters 
function greetPerson(name) {
    return "Hello ".concat(name || 'stranger');
}
// console.log(greetPerson())
// Nullish Coalescing and Optional Chaining
var inp = undefined;
var value1 = inp !== null && inp !== void 0 ? inp : "default"; // this default if inp is undefined
var user = {
    address: "general trias",
    phone: 23000,
};
var street = user.empt; // safely acces the propertuies  even if not exist in types still not catch in error
print(street);

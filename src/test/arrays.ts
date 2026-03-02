function print(ars : any) : void {
    console.log(ars)
}


const names : string[] = []


names.push("Hello")

const names2 :readonly string[] = []
// names2.push("Hello")


// print(names)



// types inference

const nums = [1, 2, 3, 4, 5]

nums.push(10)

// nums.push("hello") // all element array should be numbers

let res : number = nums[nums.length-1]

print(res)




// Tuples -> type array 


let tpes : [string, string, number] = ["hello", "hello", 1100]
const graph: [x: number, y: number] = [55.2, 41.3];


const [x, y] = graph
print(x)



// Object types 


const car : {a : number, b : string, c?: boolean} = { // with optional to add value later
    a : 100,
    b : "Hello",
}

car.c = true


print(car)

// Index signatures 


const nameAgeMap : {[index : string] : number} = {}

// Index signatures like this one can also be  
// expressed with utility types like Record<string, number>.
nameAgeMap.test = 10
nameAgeMap.test2 = 10
nameAgeMap.test3 = 10


type AllowedNames = "Alice" | "Bob";

// This works perfectly:
const scores: Record<AllowedNames, number> = { // Record<key, type>
  Alice: 95,
  Bob: 88
};

// Define the Keys (properties)
type Roles = "admin" | "editor" | "guest";

// Define the Value Type (values)
interface Permissions {
  canEdit: boolean;
  canDelete: boolean;  
}

// Create the Record
                        // key ---> values  
const systemAccess: Record<Roles, Permissions> = {
  admin: { canEdit: true, canDelete: true },
  editor: { canEdit: true, canDelete: false },
  guest: { canEdit: false, canDelete: false }
};



// print(nameAgeMap)





// Enums

enum StatusCodes { // for built static value
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}


console.log(StatusCodes.NotFound)
console.log(StatusCodes.Success)
console.log(StatusCodes.Accepted)





// Alias And Interface 

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const a_cars: Car = {
  year: carYear,
  type: carType,
  model: carModel
};




// union and intersection 

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true }; // interseciton more likely Animal & Bear propertyes 


type Status = "success" | "error";
let response: Status = "success";





type First = {test1 : boolean}
type Second = First &  {test2 : boolean}

const testResult : Second  = {test1 : true, test2 : true}

print(testResult)



// Interface  -> only works with object 


interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};


// Inheritance of types 
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color?: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
//   color: "red"
};


// Merging
interface A { name: string; } interface A { age: number; } const dog: A = { name: "Fido", age: 5 };
// Similar interface auto merge


// Summary -> Interface (goods for static shaped apis or database scheme )
// Type -> good for raw object conversion and manipulation




// Union types -> OR

function printStatusCode(code: string | number) { // make a choice here is either string or number 
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');





// Define the interface 

interface Product {
    id : number,
    name : string, 
    price : number,
    category : "electronics" | "clothing" | "books",
    inStock : boolean
}

const products : Product[] = [
   { id: 1, name: "Mechanical Keyboard", price: 120, category: "electronics", inStock: true },
  { id: 2, name: "Coding Hoodie", price: 45, category: "clothing", inStock: true },
  { id: 3, name: "TypeScript Handbook", price: 30, category: "books", inStock: false },
]



// Writing type function 

// get price that is under the budget

function getPriceBudget(items : Product[], budget : number) : Product[] { // be carefull when returning
    return items.filter(i => i.price <= budget) 
}

const affordable = getPriceBudget(products, 100);

console.log("Affordable products :: ", affordable)




// Generic function  -> work with any type while maintaining it typesafety


type TE = [
    name : string,
    age : number
]



function getFirstItem<T extends TE >(items : T[]) : (string | number)[] { // T becomes placeholder of any types incomming
    console.log("flat :", items.flat()) // .flat() return either string | number or any, so not matched with TE type
    return items.flat()
}


// const itemFirst = getFirstItem(products)
const itemFirst2 = getFirstItem([["John", 20], ["Jane", 30]]);


console.log(itemFirst2)


// learned -> we should know it all in return types since that is always explicitly set for safetyness




// The search tool

// keyOf -> extract the key type of a type object
//   | property: keyof Person -> expects the param to be string === prop


//    { id: 1, name: "Mechanical Keyboard", price: 120, category: "electronics", inStock: true }
function filterByProperty<T, K extends keyof T>(items : T[], key : K, value : T[K]) : T[] {
    return items.filter(items => items[key] === value)
}

console.log(filterByProperty(products, "name", "Mechanical Keyboard"))




// Utility Types 


// Partial<T> -> Makes properties optional for T // you makes a type accepted for smaller field
// Pick<T, K> -> Creates a new type by picking specific keys from T.


type User = {
    id : number,
    username : string,
    email : string,
    password : string 
}

type LoginResponse = Pick<User, "username" | "password" >

function login(user : LoginResponse) : boolean {
    return user.username === "john"
}
console.log(login({username : "john", password : 'test123'})) // you create a types that needs to be accepted

// Omit<T, K> -> Creates a new type by removing specific keys from T



console.log(typeof (parseInt('1000', 10) as number))




// Map types --> create new types by transforming properties of existing types 



// Transform value
type Flag<T> = {
    [K in keyof T] : boolean
}
interface UserInfo {
    id :number,
    name : string,
    email : string
}


type typeFlags = Flag<UserInfo>;


const flags : typeFlags = {
    id : true,
    name : true,
    email : true
}

// Makes properties optional


interface UserForChange {
    price : number,
    count : number,
    address : string,
}


type ToChange = {
    [K in keyof UserForChange]? : UserForChange[K]
} // all properties of UserForChange is optional now


const testChanges : ToChange = {
    price : 100 // officially 
}

// adding readonly 
type AddReadOnly<T> = {
    +readonly [K in keyof T]-? : T[K] // -? this removes the optional field
}

// must requires all types 
const readToChange : AddReadOnly<ToChange> = {
    price : 1000,
    count : 100,
    address : "test"
}






// test generic object and data



type TestType<T extends string> = {
    data :  T
}

const unmovedType : TestType<string> = {
    data : "hello world1"
}

// console.log(unmovedType)

interface Person {
    id : number,
    name : string,
    email : string
}

// set the prop to function === Getters
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`] : () => T[K]
}
type UsersGetters = Getters<Person>

// Filter out function only
type methodOnly<T> = {
    [K in keyof T as T[K] extends Function ? K : never] : T[K] 
}
type MethodToOptions<T> = {
    [K in keyof T]? : T[K] // this becomes optional fn => number | undefined
}
const res : MethodToOptions<methodOnly<UsersGetters>> = {
    getId : () : number => 100 
}

console.log(res.getId?.())





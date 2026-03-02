
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




// 
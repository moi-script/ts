
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

function getPriceBudget(items : Product[], budget : number) : Product[] {
    return items.filter(i => i.price <= budget)
}


const affordable = getPriceBudget(products, 100);

console.log("Affordable products :: ", affordable)
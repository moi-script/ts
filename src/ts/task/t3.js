// Define the interface 
var products = [
    { id: 1, name: "Mechanical Keyboard", price: 120, category: "electronics", inStock: true },
    { id: 2, name: "Coding Hoodie", price: 45, category: "clothing", inStock: true },
    { id: 3, name: "TypeScript Handbook", price: 30, category: "books", inStock: false },
];
// Writing type function 
// get price that is under the budget
function getPriceBudget(items, budget) {
    return items.filter(function (i) { return i.price <= budget; });
}
var affordable = getPriceBudget(products, 100);
console.log("Affordable products :: ", affordable);

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
function getFirstItem(items) {
    console.log("flat :", items.flat()); // .flat() return either string | number or any, so not matched with TE type
    return items.flat();
}
// const itemFirst = getFirstItem(products)
var itemFirst2 = getFirstItem([["John", 20], ["Jane", 30]]);
console.log(itemFirst2);

// Define the interface 
var _a;
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
// learned -> we should know it all in return types since that is always explicitly set for safetyness
// The search tool
// keyOf -> extract the key type of a type object
//   | property: keyof Person -> expects the param to be string === prop
//    { id: 1, name: "Mechanical Keyboard", price: 120, category: "electronics", inStock: true }
function filterByProperty(items, key, value) {
    return items.filter(function (items) { return items[key] === value; });
}
console.log(filterByProperty(products, "name", "Mechanical Keyboard"));
function login(user) {
    return user.username === "john";
}
console.log(login({ username: "john", password: 'test123' })); // you create a types that needs to be accepted
// Omit<T, K> -> Creates a new type by removing specific keys from T
console.log(typeof parseInt('1000', 10));
var flags = {
    id: true,
    name: true,
    email: true
};
var testChanges = {
    price: 100 // officially 
};
// must requires all types 
var readToChange = {
    price: 1000,
    count: 100,
    address: "test"
};
var unmovedType = {
    data: "hello world1"
};
var res = {
    getGetId: function () { return 100; }
};
console.log((_a = res.getGetId) === null || _a === void 0 ? void 0 : _a.call(res));

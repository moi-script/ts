function print(ars) {
    console.log(ars);
}
var names = [];
names.push("Hello");
var names2 = [];
// names2.push("Hello")
// print(names)
// types inference
var nums = [1, 2, 3, 4, 5];
nums.push(10);
// nums.push("hello") // all element array should be numbers
var res = nums[nums.length - 1];
print(res);
// Tuples -> type array 
var tpes = ["hello", "hello", 1100];
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
print(x);
// Object types 
var car = {
    a: 100,
    b: "Hello",
};
car.c = true;
print(car);
// Index signatures 
var nameAgeMap = {};
// Index signatures like this one can also be  
// expressed with utility types like Record<string, number>.
nameAgeMap.test = 10;
nameAgeMap.test2 = 10;
nameAgeMap.test3 = 10;
// This works perfectly:
var scores = {
    Alice: 95,
    Bob: 88
};
// Create the Record
// key ---> values  
var systemAccess = {
    admin: { canEdit: true, canDelete: true },
    editor: { canEdit: true, canDelete: false },
    guest: { canEdit: false, canDelete: false }
};
// print(nameAgeMap)
// Enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(StatusCodes.Accepted);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var a_cars = {
    year: carYear,
    type: carType,
    model: carModel
};
var bear = { name: "Winnie", honey: true }; // interseciton more likely Animal & Bear propertyes 
var response = "success";
var testResult = { test1: true, test2: true };
print(testResult);

function print(ars) {
    console.log(ars);
}
// Void return type
// Parameters
// Default Parameters
function test(arg, value) {
    if (value === void 0) { value = 1000; }
    console.log(arg, value);
}
var argsOperator = {
    dividend: 10,
    divisor: 2
};
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
print(divide(argsOperator));
// Rest Parameter
// Type alias 

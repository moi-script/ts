console.log("Hello world");
// Global context
console.log("GLobal");
console.log(this); // in browser this === window
function identity(value) {
    // it makes Identity structure pure
    // without constraint Identity is ignored
    console.log('Value --> ', value.value1);
    return value.value1;
}
// this also works
// function identities<T extends {value1 : string}>(value : T)  {   
//     console.log('Value --> ', value.value1)
//     return value.value1
// }
console.log(identity({
    value1: "value1",
    value2: 20232
}));
// console.log(identity(123))
// applying bind
// reach this kinds of level
function bind(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn.apply(context, args);
    };
}
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
function testData(d) {
    return d;
}
console.log(testData({ age: 10, name: "John" }));
// Class Implementation 
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
var wrapped = { value: 10 };

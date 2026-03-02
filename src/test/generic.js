// Dry Code (Don't Repeat Yourself):
// You don't have to write StringBox, NumberBox, and UserBox. You just write Box<T>.
// WISE: We know T has an 'id' property
function logId(item) {
    console.log(item.id);
}
// Now this one interface works for Users, Products, or Orders!
try {
    var userResponse = { data: { name: "Leo" }, status: 200 };
}
catch (err) {
    console.log("Error --> ", err);
}

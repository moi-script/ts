// Create a Generic API Response Type
function TypeEntities(args) {
    return args;
}
console.log(TypeEntities({ type: "Robot", task: "packaging" }));
function returnTypeCheck(args) {
    return args;
}
console.log(returnTypeCheck({ type: "Person", roles: ["technician"] }));

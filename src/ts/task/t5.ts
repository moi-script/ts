
// function calculateTotal(price, quantity, discount) {
//   const subtotal = price * quantity
//   const finalPrice = subtotal - subtotal * discount
//   return finalPrice
// }

// const result = calculateTotal(100, 2, 0.1)
// console.log(result)
        


function calculateTotal(price : number, quantity : number, discount : number) : number {
    const subtotal = price * quantity;
    const finalPrice = subtotal - subtotal * discount
    return finalPrice
}

const res : number = calculateTotal(100, 2, 0.1)
console.log(res)







// function createUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     isAdult: age >= 18
//   }
// }

// const user = createUser("Moises", 21)

// console.log(user.name)
// console.log(user.isAdult)


interface User {
    name : string,
    age : number,
    isAdult : boolean
}



function createUser(name : string, age : number) : User {
    return {
          name : name,
        age : age,
        isAdult : age >= 18
    }
}

const user = createUser("Moises",21);

// console.log(user.name)
// console.log(user.age)

// function printId(id) {
//   if (typeof id === "number") {
//     console.log("Numeric ID:", id)
//   } else {
//     console.log("String ID:", id.toUpperCase())
//   }
// }

// printId(101)
// printId("abc123")
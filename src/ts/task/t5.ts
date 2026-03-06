
// function calculateTotal(price, quantity, discount) {
//   const subtotal = price * quantity
//   const finalPrice = subtotal - subtotal * discount
//   return finalPrice
// }

// const result = calculateTotal(100, 2, 0.1)
// console.log(result)



function calculateTotal(price: number, quantity: number, discount: number): number {
    const subtotal = price * quantity;
    const finalPrice = subtotal - subtotal * discount
    return finalPrice
}

const res: number = calculateTotal(100, 2, 0.1)
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
    name: string,
    age: number,
    isAdult: boolean
}



function createUser(name: string, age: number): User {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    }
}

const user = createUser("Moises", 21);

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


function printId(id: string | number): void {
    if (typeof id === 'number') {
        console.log("Numeric ID : ", id)
    } else {
        console.log("String ID : ", id.toUpperCase())

    }
}


// printId(101)
// printId("abc123")



// function getFirstItem(items) {
//   return items[0]
// }

const numbers = [10, 20, 30]
// const firstNumber = getFirstItem(numbers)

const names = ["Alice", "Bob", "Charlie"]
// const firstName = getFirstItem(names)

// console.log(firstNumber)
// console.log(firstName)


// function getFirstItem(items : number[] | string[]) : number | string { // this becomes loosely types needs new approachh
//         return items[0] 
// }

// console.log(firstName)




function getFirstItemType<T>(items: T[]): T { // this becomes loosely types needs new approachh
    return items[0]  // auto infer the type to return
}

const firstItem = getFirstItemType(numbers)
console.log(firstItem) // Explicit generics are only needed when TypeScript cannot infer the type.
//  getFirstItemType(numbers) 

// safer version when ready to have some loop hole like undefined

function getFirstItemTypes<T>(items: T[]): T | undefined {
    return items[0]
}





// function getProperty(obj, key) {
//   return obj[key]
// }

// const user = {
//   name: "Moises",
//   age: 21,
//   role: "engineer"
// }

// const value = getProperty(user, "name")
// console.log(value)



interface UserInfo {
    name: string,
    age: number,
    role: string
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const userInfo: UserInfo = {
    name: "John",
    age: 21,
    role: "Fullstack Developer"
}
const name = getProperty(userInfo, "name");
const age = getProperty(userInfo, "age");
const role = getProperty(userInfo, "role");



// function processEvent(event) {
//   if (event.type === "login") {
//     console.log("User logged in:", event.username)
//   }

//   if (event.type === "logout") {
//     console.log("User logged out:", event.userId)
//   }
// }

// processEvent({
//   type: "login",
//   username: "moises"
// })

// processEvent({
//   type: "logout",
//   userId: 42
// })

type Login = {
    type: "Login",
    username: string
}

type Logout = {
    type: "Logout",
    userId: number
}


type processEvent = (Login | Logout)

const process: processEvent = {
    username: "John",
    type: "Login",
}

function fnProcessEvent(event: processEvent): void {
    if (event.type === "Login") {
        console.log("User logged in:", event.username)

    }
    if (event.type === "Logout") {
        console.log("User logged out:", event.userId)
    } // we can use the switch statement better here since it has exhaustive checkings



}

fnProcessEvent(process)



interface User2 {
    name: string,
    age: number,
    role: string
}


// type OptionalUserUpdate = Partial<User> // provide optionals property for User
// { age: 22 }
function updateUser<T>(user: T, keyUpdates: Partial<User2>): T {
    return {
        ...user,
        ...keyUpdates
    }
}

const userContent: User2 = {
    name: "John",
    age: 21,
    role: "Web developer"
}

const updated = updateUser(userContent, { age: 25 })
console.log("Updates :: ", updated)
// 
// function updateUser(user, updates) {
//   return {
//     ...user,
//     ...updates
//   }
// }

// const user = {
//   name: "Moises",
//   age: 21,
//   role: "engineer"
// }

// const updated = updateUser(user, { age: 22 })

// console.log(updated


// Will review this next time







// function findUser(users, id) {
//   return users.find(user => user.id === id)
// }

// function addUser(users, user) {
//   users.push(user)
//   return users
// }

// function printContact(user) {
//   if (user.contact) {
//     console.log(user.contact.email || user.contact.phone)
//   }
// }

// const users = [
//   { id: 1, name: "Moises", role: "admin" },
//   { id: 2, name: "John", role: "user" }
// ]

// addUser(users, {
//   id: 3,
//   name: "Alice",
//   role: "user",
//   contact: {
//     email: "alice@email.com"
//   }
// })

// const user = findUser(users, 1)

// printContact(user)


interface UserList {
    id: number,
    name: string,
    role: string,
}


// had a partial(optional) list of User properties 
// function addUser(user : Partial<UserList>[], userInfo :  Partial<UserList>) : Partial<UserList>[] {
//      user.push(userInfo) // however this user.push -> mutate the original reference from arg
//      return user
// } 


function addUser(user: UserList[], userInfo: Partial<UserList>): UserList[] {
    const newItem: UserList = {
        id: Date.now(),
        name: "Default",
        role: "Def ault",
        ...userInfo // [key : string] : any -> index signature
    }
    // user.push(newItem) // this mutates original array 
    return [...user, newItem] // this returns something new without mutating
    // return user
}

function findUser(users: UserList[], id: number): UserList | undefined {
    return users.find(user => user.id === id)
}


type ContactType = {
    email?: string,
    phone?: string
}


// some minor additions
type UserWithContactType = UserList & {
    contact: ContactType
}

// this makes merge type from UserType
function printContact(user: UserWithContactType): void {
    if (user.contact) {
        console.log(user.contact.email || user.contact.phone)
    }
}

// function printContact(user) {
//   if (user.contact) {
//     console.log(user.contact.email || user.contact.phone)
//   }
// }



// learned -> Object type Creation, UPdates, Insert  
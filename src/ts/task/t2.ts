// Implement a Circuit Breaker logic. If a specific task fails 3 times, the scheduler should 
// "trip" and stop attempting that specific type of task for 30 seconds while allowing other
//  task types to continue.

// Reward: This is how real-world distributed systems (like those at Netflix or Uber) stay alive during a crash.



// generate task list 
// execute iterate sequence task
// create a dummy error fallback each certain types
// attempt to re execute the error parts for 3 times
// ship to other existing task other than that  







type callBack = () => number

function errorCount(error : number) : callBack  {
    let count = error
    return () : number => {
        console.log('Error --> ', count)
        count += 1
        return count
    }
}

let close = errorCount(0);




function validateAttempt(cl : () => number) : boolean {

    if(cl() === 3) return false

    return true
}

function handleError() : void {
    while(validateAttempt(close)){
        console.log("Attempt")
    }
    console.log("Shipped")
}


handleError()

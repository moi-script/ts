// You cannot use any or unknown in your task definitions. 
// You must use Discriminated Unions to ensure that if a task is "Email," 
// it must have a recipient, and if 
// it's "System-Command," it must have a timeout.

// Reward: You’ll never have to debug "undefined" at runtime again.


type TimerType = ReturnType<typeof setTimeout>

type TypeTest = {task : "Email", isRecipient : true} | {task : "System command", delay : (delayCount : number) => TimerType} 


function print(...args : any[]) : void {
    console.log(...args)
}

function typeCheck( args : TypeTest) : void {
    if(args.task === "Email") {
        print("Recipient exist? : ", args.isRecipient)
    } else {
        print("System command")
        args.delay(2000)
    }
}


function timer(delayCount : number) : TimerType {
    return setTimeout(() => {
        print("Delayed..")
    }, delayCount)
}

typeCheck({task :"System command", delay : timer})









// You cannot use any or unknown in your task definitions. 
// You must use Discriminated Unions to ensure that if a task is "Email," 
// it must have a recipient, and if 
// it's "System-Command," it must have a timeout.
function print() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
function typeCheck(args) {
    print("Doing type checked");
    if (args.task === "Email") {
        print("Recipient exist? : ", args.isRecipient);
    }
    else {
        print("System command", "Delayed");
        args.delay(2000);
    }
}
function timer(delayCount) {
    return setTimeout(function () {
        print("Done");
    }, delayCount);
}
typeCheck({ task: "System command", delay: timer });

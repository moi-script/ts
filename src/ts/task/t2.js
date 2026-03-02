// Implement a Circuit Breaker logic. If a specific task fails 3 times, the scheduler should 
// "trip" and stop attempting that specific type of task for 30 seconds while allowing other
//  task types to continue.
function errorCount(error) {
    var count = error;
    return function () {
        console.log('Error --> ', count);
        count += 1;
        return count;
    };
}
var close = errorCount(0);
function validateAttempt(cl) {
    if (cl() === 3)
        return false;
    return true;
}
function handleError() {
    while (validateAttempt(close)) {
        console.log("Attempt");
    }
    console.log("Shipped");
}
handleError();

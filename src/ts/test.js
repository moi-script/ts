



function taskItem (arg) {

   return function () {
    const interuptedFn = new Promise((acc, rej) => {

        setTimeout(() => {
 
            const errorMessage = new Error("Unable to process transaction, will returned in 30 seconds")
            acc(errorMessage )
        }, 2000);
    })
    const working = new Promise((acc, rej) => {
        setTimeout(() => {

            acc("Done")
        }, 200)
    })

    return typeof(arg) === 'number'?  interuptedFn : working
   }
}

function generateTasklist(length) {
    const taskList = []
    const randomIndex = parseInt(Math.random() * length)

    for(let i =0; i< length; i++) {
        if(randomIndex === i) {
            taskList.push(taskItem(randomIndex))
        }
        taskList.push(taskItem())
    }

    return taskList
}

async function run () {
    let errors = [];
for (const t of generateTasklist(10)) {
    const res = await t()

    if(typeof res === 'object') {
        console.log("This is erorr")
        errors.push(t)
    }
}
}
// console.log(generateTasklist(10))

run()

// const task = []
// for(let i = 0; i< 4; i++) {

// }
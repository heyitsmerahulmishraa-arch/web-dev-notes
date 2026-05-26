// const a = process
// console.log(process)

const {Worker} = require("worker_threads")

new Worker("./workerOne.js")
new Worker("./workerTwo.js")
new Worker("./workerThree.js")
// importing module from different location/file

// const add = require("./myModule.js")
// console.log(add)
// console.log(add(5,6))

const operations = require("./myModule")
console.log(typeof operations)
console.log(operations.add(5,6))
console.log(operations.prod(5,6))
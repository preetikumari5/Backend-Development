// asynchronous execution - executes any step according to condition provide

console.log("hello from first line")

setTimeout(()=> {
    console.log("hello from the call back fn")
},3000)
// 3000 - 3sec ke baad it will execute 

console.log("hello from last line")
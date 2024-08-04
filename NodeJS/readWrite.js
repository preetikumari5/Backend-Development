// read from external file

const fs = require('fs')
console.log(typeof fs)
console.log(" ")
// read in sync way
console.log("Before starting to read")

const content = fs.readFileSync("input.txt")
console.log("Output content is: "+content)

console.log("Last line")
console.log(" ")
// read in async way
console.log("Before starting to read")

fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }else{
        console.log("Output content is: "+content)
    }
})

console.log("Last line")


// write to an external file

// sync way
console.log("")
console.log("before")
fs.writeFileSync('output1.txt','Hello!!')
console.log("after")

// async way
console.log("")
console.log("before")
fs.writeFile('output2.txt','Hello 2!!',err => {
    if(err){
        return console.log(err)
    }
    console.log('Written successfully!')
})
console.log("after")
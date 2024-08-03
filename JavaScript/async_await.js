// same as promise with different syntax

function getMessage(){
    return 'hello students1'
}

console.log(getMessage())

// returns promise
async function getMessage2(){
    return 'hello students2'
}

console.log(getMessage2())
// to get outcome of async 
getMessage2().then(result => console.log(result))


// print hello after wait

function printAfterWait(){
    console.log('First line')
    setTimeout(()=>{
        console.log('hello students3')
    },3000)
    console.log('last line')
}

printAfterWait()

// async and await
console.log("hello from beginning")
async function printAfterWait2(){
    console.log('First line2')

    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hello students4')
        },3000)
    })

    // wait to get data execution
    
    let result = await data
    console.log(result)
    console.log('last line2')
}

printAfterWait2()
console.log("hello from end")


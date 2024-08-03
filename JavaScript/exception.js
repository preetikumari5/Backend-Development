// 1. syntax exception

// console.log("hello"


// 2. runtime exception

// let x = 5
// console.log(x.toUpperCase())


// 3. logical exception

// let num = 5
// for(i=-3;i<5;i++){
//     console.log(num/i)
// }


// exception-handling using try and catch

try{
    let obj = undefined
    console.log(obj.name) 
}catch(err){
    console.log("exception handled")
    console.log(err)
}

try{
    let obj ={
        name : 'preeti'
    }
    console.log(obj.name) 
}catch(err){
    console.log("exception handled")
    console.log(err)
}

try{
    let obj ={
        name : 'preeti'
    }
    console.log(obj.name) 
}catch(err){
    console.log("exception handled")
    console.log(err)
}finally{
    console.log("executes always")
}


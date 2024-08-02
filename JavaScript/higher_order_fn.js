// higher order function - parameter are function or return bhi function  hi

// 1st order - parameter and return are primitive or object

function operation(operatorfn,a,b){
    return operatorfn(a,b)
}

function add(a,b){
    return a+b
}

let result = operation(add,5,6)
console.log(result)


function getGreetMethod(){
    return function(){
        console.log("hii")
    }
}

let greetfn =  getGreetMethod()
console.log(greetfn)
console.log(typeof greetfn)

greetfn()


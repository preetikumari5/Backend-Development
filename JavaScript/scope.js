// global scope

var name = "preeti"
console.log(name)

function func(){
    console.log(name)
}

func()

// local scope/function scope variable

var func = () => {
    var num = 5;
    console.log(num)
}

func()
// console.log(num)

// block scope  (let and const datatype work nhi krte) 
{
    let x =20
    console.log(x);
}

console.log(x)
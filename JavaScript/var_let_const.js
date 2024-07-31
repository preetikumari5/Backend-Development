// var 
// has function scope but no block scope
// it is hoisted
function f1(){
    var i=5;
    console.log(i)
}
f1()
// console.log(i)

{
    var j=7
}
console.log(j)

console.log(k)
var k = 56
console.log(k)

// let
// no hoisting
// has no block support

console.log(p)
let p = 0

{
    let s =90
}

console.log(s)


// const
// scope is same as let
// are fixed can't be changed

const country ="India"
country = "USA"

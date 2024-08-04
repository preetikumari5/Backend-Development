// creating user defined module

let add = (a,b) => {
    return a+b
}

let prod = (a,b) => {
    return a*b
}


// module.exports = add
// // overrides previous function 
// module.exports = prod


// exporting objects 
module.exports = {
    add: add,
    prod: prod
}
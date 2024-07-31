// sequence of characters
// it is immutable
let name = 'preeti'
let city = 'chennai'
console.log(name,city)
console.log(typeof name)

// accesing char based in index
console.log(name[0])
console.log(name[3])
console.log(name[9])

name[0]='A'
console.log(name)

// length of string
console.log(name.length)

let first_name = "Preeti"
let last_name = " kumari"

let full_name = first_name.concat(last_name)
console.log(full_name)

// change case
console.log(full_name.toUpperCase())
console.log(full_name.toLowerCase())

// char at any index
console.log(full_name.charAt(10))

// slicing
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))

// index of
console.log(name.indexOf('t'))

// trim
let word =" apple "
console.log(word.trim())

// split - gives array 
name = "preeti kumari"
console.log(name.split(" "))
console.log(name.split(""))
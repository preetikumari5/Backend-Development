// function with no arguments and no returns

var hello = () => console.log("hello!")
hello()

// function with parameters and return
var sum = (a,b) => a+b
console.log(sum(3,4))

// fn with multiple lines
var process = (c,d) => {
    console.log("need to process");
    return c*d;
}

console.log(process(4,5))


// immediately invoked function execution
(function(){
    console.log('hii')
})()
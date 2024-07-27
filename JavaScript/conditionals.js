var num = 20
if(num%2==0){
    console.log("even")
}
else
{
    console.log("odd")
}
console.log("after if")

// ternary operator
num%2 == 0 ? console.log("even") : console.log("odd")

/**
 * nested conditionals
 */

var a =10
if(a>=0){
    if(a>5)
    {
        console.log('a is greater than 5')
    }
    else
    {
        console.log('a is smaller than 5')
    }
}
else{
    console.log('a is less than 0')
}

// switch

var fruit = "pear"

switch(fruit){
    case "apple":
        console.log("it's an apple")
        break
    case "mango":
        console.log("it's a mango")
        break
    default :
        console.log("not a valid fruit")
}
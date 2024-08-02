// forEach method

players = ["Sachin","Virat","Dhoni","Rohit"]
players.forEach((player)=>console.log(player))

// map -> creation of new transformed array

arr=[1,2,3,4,5,6]

cube_arr = arr.map(num => num**3)
console.log(arr)
console.log(cube_arr)

// filter
let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_arr = arr1.filter((num)=>num%2==0)
console.log(even_arr)


// reduce

arr3 = [1,2,3,4,5,6,7,,8,9,10]

const sum = arr3.reduce((curr,next)=>curr+next)
console.log(sum)

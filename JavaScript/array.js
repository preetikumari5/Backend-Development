arr = [1,2,3]
console.log(typeof arr)

arr1 = new Array()
console.log(typeof arr1)
console.log(arr1)

console.log(arr[0])
console.log(arr[-1])

arr[1]=200
console.log(arr)

// insert in array
arr2 = [1,2,3,4,4,5,6]
// adds at end
arr2.push(5)
console.log(arr2)

// adds in start
arr2.unshift(555)
console.log(arr2)

// remove from end

console.log(arr2.pop())
console.log(arr2)

// shift - remove from start
console.log(arr2.shift())
console.log(arr2)

// adding 2 arrays
let r = arr.concat(arr2)
console.log(r)

// length
console.log(r.length)

// array to string
chr_arr = ['p','r','e','e','t','i',' ','k','u','m','a','r','i']
// join
console.log(chr_arr.join(""))
console.log(chr_arr.toString())

// slicing - array remains same
let nums=[1,2,3,4,5,6,5,7,8,9,10]
console.log(nums.slice(2))
console.log(nums.slice(2,7))
console.log(nums.slice(5,-1))
console.log(nums.slice(-9,-2))
console.log(nums.slice(2,-1))
console.log(nums)

// splicing - array changes
let nums2=[1,2,3,4,5,6,5,7,8,9,10]
console.log(nums2.splice(2))
console.log(nums2.splice(2,7))
console.log(nums2.splice(5,-1))
console.log(nums2.splice(-9,-2))
console.log(nums2.splice(2,-1))
console.log(nums2)



// reverse array
let nums3 = [1,2,3,4,5]
nums3.reverse()
console.log(nums3);

// index 
console.log(nums3.indexOf(5))

// sorting
arr4 = [3,7,3,0,8,1]
arr4.sort()
console.log(arr4)

arr5 = [15,40,13,1,40,2]
arr5.sort((a,b) => a-b)
console.log(arr5)


// reverse array
arr5 = [15,40,13,1,40,2]
arr5.sort((a,b) => b-a)
console.log(arr5)
const user = {
    name: 'preeti',
    age : 20,
    city: 'chennai'
}
console.log(user)

// access data
console.log(user.name)
console.log(user['name'])   

// add data
user.country = 'india'
user['continent'] = 'asia'

console.log(user)

// delete 
delete user.country
console.log(user)
delete user['continent']
console.log(user)

let person = {
    name: 'preeti',
    age:'20',
    address: {
        city:'chennai',
        state: 'tamilnadu',
        country: 'india'
    }
}

for(let key in person){
    console.log(key)
}

for(let key in person){
    console.log(key, " =>" ,person[key])
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// cloning 

const new_person = Object.assign({},person)
console.log(new_person)

const new_person_1 = Object.assign({},person,{role:'Developer'})
console.log(new_person_1)


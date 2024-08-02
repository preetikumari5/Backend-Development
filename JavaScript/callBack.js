

function greet(name,callback){
    const greeting = "hello "+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("preeti ",displayGreeting)


// callback hell or pyramid of doom or multiple layers of callback

getUser(function(user){
    getPosts(user.id,function(post){
        displayUserInfoandPost(user, posts,function(){
            console.log("user info and posts succesfully displayed")
        })
    })
})
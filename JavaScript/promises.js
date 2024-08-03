// promise - used for asynchronous operations

const aPromise = new Promise((resolve, reject) => {
    let aDecision = false;
    if (aDecision) {
        resolve("yes");
    } else {
        reject("no");
    }
});

aPromise.then((msg) => {
    console.log("message:", msg);
}).catch((msg) => {
    console.log("message:", msg);
}).finally(() => console.log("finish"));


// for async function
const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("f1: I will go");
        } else {
            reject("f1: I can't go");
        }
    }, 3000);
});

const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("f2: I will go");
        } else {
            reject("f2: I can't go");
        }
    }, 2000);
});

const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("f3: I will go");
        } else {
            reject("f3: I can't go");
        }
    }, 1000);
});

// Promise.all - used for all the promises / like and operator
Promise.all([f1Promise, f2Promise, f3Promise])
    .then((msg) => {
        console.log(msg);
        console.log("We are all going");
    })
    .catch((msg) => {
        console.log(msg);
        console.log("Stop the plan");
    });




// Promise.any - any one promise

const gf1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("gf1: I will go");
        } else {
            reject("gf1: I can't go");
        }
    }, 1000);
});

const gf2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("gf2: I will go");
        } else {
            reject("gf2: I can't go");
        }
    }, 2000);
});

const gf3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("gf3: I will go");
        } else {
            reject("gf3: I can't go");
        }
    }, 3000);
});

Promise.any([gf1Promise,gf2Promise,gf3Promise])
   .then(msg => {
      console.log(msg)
      console.log("happy")
   }).catch(msg=>{
       console.log(msg)
       console.log("sad")
   })

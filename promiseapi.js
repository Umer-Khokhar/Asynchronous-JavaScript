let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("My 1st Resolve")
    }, 4000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject("My 2nd Reject")
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("My 3rd Resolve")
    }, 3000)
})
// p1.then((value) => {
//     console.log(value)
// })
// p2.then((value) => {
//     console.log(value)
// })
// p3.then((value) => {
//     console.log(value)
// })

// Using this way you can recieve data one by one p1 in 1 seconds, p2 in two seconds and p3 in the three seconds, But how to recieve the data at once. Here's promise API's methods comes to the party.

// ------- Promise.all() ------- //

// let promise_all = Promise.all([p1, p2, p3])

// ------- Promise.allSettled() ------- //

let promise_all = Promise.allSettled([p1, p2, p3])

// ------- Promise.allSettled() ------- //

// let promise_all = Promise.race([p1, p2, p3])

// ------- Promise.allSettled() ------- //

// let promise_all = Promise.any([p1, p2, p3])

// ------- Promise.allSettled() ------- //

// let promise_all = Promise.resolve('1')

// ------- Promise.allSettled() ------- //

// let promise_all = Promise.reject(2)

promise_all.then((fetchData) => {
console.log(fetchData)
})
.catch(() => {
    console.error("Error: your promise is rejected")
})

// You can see that promise.all return the array of all three promises but what if from above three promises any of them is rejected?, if anyone is rejected then you will not see any of the array with the promise.all()

//.allSettled return an array even if the one of the promise is rejected but you can is the status either fullfil or rejected!

// But what if you want to get the first recieved promise here comes .race() method. Only down side of .race is if the first recieved promise is rejected or throw any error this will not work here is another method below

// .any() method recieved the first method that is fullfiled not recieved and method that is rejected

// .reject() recieced the rejected and catch error and .resolve method recieved the resolved and .then
// parallel asynchronous operation
const promise1 = new Promise((resolve)=> setTimeout(() => resolve("one"),1000));

const promise2 = new Promise((resolve)=> setTimeout(() => resolve("two"),2000));

const promise3 = new Promise((resolve)=> setTimeout(() => resolve("three"),5000))

Promise.all([promise1,promise2,promise3]).then((result) =>{
    console.log(result)
}).catch((error)=> console.log(error))
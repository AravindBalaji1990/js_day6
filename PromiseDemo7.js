//Basic promise 
const mypromise = new Promise((resolve, reject) =>{
    //simulatre a asynchronous call
    setTimeout(()=>{
        const data  = "Promise resolved"
        resolve(data)
    }, 2000);
})

mypromise.then((result) =>{
    console.log(result) // promise resolved
}).catch((error)=>{
    console.log(error) // exception that will be captured
})
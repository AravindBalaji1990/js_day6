// sequestial asynchronous operation
//chaining of promises

const firstProm = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("1st operation")
    },1000)
})

const secondProm =  (data) => { return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("2nd operation")
    },3000)
})
}

firstProm.then((result) => secondProm(result))
.then((finalres) => console.log(finalres))
.catch((error) => console.log(error))

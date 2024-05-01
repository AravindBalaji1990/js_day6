// sequestial asynchronous operation
//chaining of promises

const firstProm = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("1st operation")
    },1000)
})

const secondProm =  (xyz) => { return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(xyz + " - 2nd operation")
    },3000)
})
}

firstProm.then((result) => secondProm(result))
.then((finalres) => console.log(finalres))
.catch((error) => console.log(error))

//chaining in promises 

function asyncFunction1(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("this is from first operation")
        }, 1000)
    })
}

function asyncFunction2(data){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(data +" - this is from second operation")
        }, 1000)
    })
}

asyncFunction1().then(result => asyncFunction2(result))
.then(finalresult =>{
    console.log(finalresult)
})
.catch(error =>{
    console.error("error")
})

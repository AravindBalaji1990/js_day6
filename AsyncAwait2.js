// another way of implementation
const x =()=>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("data available")
        },1000)
    })
}

//Async function
const data= async () =>{
    console.log("aysnc function starts")

    try{
        const y = await x();
        console.log("data received ---> ", y)
    }catch(error){
        console.log("data received from error", error)
    }
    console.log("destroy the funciton")
}

//calling async fucntion
data()
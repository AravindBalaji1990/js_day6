var data1;
async function sample(){
    console.log("start")
    const data =await addition(10000)
    console.log(data)
    console.log("end")
}

function addition(time){
    setTimeout(() =>{console.log(2+2)}, time)
    return "awaiting response"
}

sample()
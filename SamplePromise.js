function exampeldata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            var da = Math.random();
            console.log(da)
            const info = da <2
            if(info){
                // console.log(info)
                resolve(`yes the statement is true ${info} `)
            }else{
                reject("no the statement is false")
            }
        }, 3000)
    })
}

function tochecklogic(){
    console.log("start to execute")
    exampeldata().then(data =>{
        console.log("resulet", data)
    }).
    catch(error =>{
        console.error(error.message)
    })
}

tochecklogic()
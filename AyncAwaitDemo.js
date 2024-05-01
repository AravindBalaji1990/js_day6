// function test(time){
//     console.log('this is an example of async await ' + time)
// }

function test(msg , time){
    return new Promise(function(resolve ) {
        setTimeout(() => resolve(msg), time);
    })
}

function test1(time ){
    return new Promise(resolve => setTimeout(resolve,time))
}

async function demoasync(){
    console.log("I start my execution")
    // await test("this is my execution" , 10000)
    await test1( 5000).then(
        result => console.log(result)
    )
    console.log("I end my execution")
}

demoasync()
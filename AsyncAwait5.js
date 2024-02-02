async function myData(){
    return await Promise.resolve("this is a example for async await");
}

async function data(){
    try{
        const result = await myData();
        console.log(result)

    }catch(error){
        console.log(error)
    }
}

data()
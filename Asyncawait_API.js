const fetchfromapi = async()=>{
    try{
        const response = await fetch("https://reqres.in/api/users")
        if(!response.ok){
            throw new Error("erro from api")
        }

        const data = await response.json();
        console.log('data -->' , data)
    }catch(error){
        console.log(error)
    }

}
fetchfromapi()
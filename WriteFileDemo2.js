// json/object 
const data ={
    name: "samasung",
    age: 15,
    city: "s korea"
}
data.manufacureyear ='2020'
console.log(data)
const jsondata = JSON.stringify(data, (key, value)=>{
    if(key === 'city'){
        return undefined;
    }
    return value;
})


console.log('this is modified data :',jsondata)
console.log('this is the original value; ',data)
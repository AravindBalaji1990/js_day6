//how we can use the call()
//call method is used to invoke funciton with a specified this  value and arguments provided individually

// function data(dataset){
//     console.log(dataset + " " + this.name)
// }

// const person = {name: 'sam'}

// // data funciton is calling the call inbuilt funciton in javascript 
// // which accepts argumnets and the this value
// data.call(person,'hi') 


//apply()  - apply accepts the arguments as array 
// function data(dataset){
//     console.log(dataset + " " + this.name)
// }

// const person = {name: 'sam'}

// data.apply(person,['hi','hello'])

//bind() - creates a new funciton with a specified this value and optional argumnets

function data(dataset){
    console.log(dataset + " " + this.name)
}

const person = {name: 'sam'}
const obj = data.bind(person)

obj('hi')

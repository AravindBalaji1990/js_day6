// fs is file system module
const fs = require('fs')
// below is the json format that we need to move it to a json file
const customer = {
    name: "Demo",
    order_count: 0,
    address: "Po Box City",
}
//stringify - which converts the object/json to be written to a file 
//how it converts - any json/objects to be converted using javascript object notation(JSON)string
const jsonString = JSON.stringify(customer,null, 2)
fs.writeFile('./newCustomer1.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Success')
    }
})

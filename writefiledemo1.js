const fs = require('fs')
const customer = {
    name: "Demo",
    order_count: 0,
    address: "Po Box City",
}
//stringify
const jsonString = JSON.stringify(customer,null, 2)
fs.writeFile('./newCustomer1.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Success')
    }
})

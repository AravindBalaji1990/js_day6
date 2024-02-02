const customer = {
  name: "New file.",
  order_count: 234,
  address: "Po Box City"
};
const jsonString = JSON.stringify(customer);
console.log(jsonString);
console.log(typeof jsonString);
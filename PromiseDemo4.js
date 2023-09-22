//use of catch in promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error")), 1000);
  });
  
  promise.catch(console.log()); // shows "Error after 1 second
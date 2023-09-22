let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("executed"), 5000);
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result), // shows "done!" after 5 second
  error => console.log(error) // doesn't run
);
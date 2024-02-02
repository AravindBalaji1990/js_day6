let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("i am executing after 5 seconds"), 5000);// milliseconds 
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result), // shows "done!" after 5 second
  error => console.log(error) // doesn't run
);
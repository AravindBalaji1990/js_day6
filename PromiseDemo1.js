// promise -resolve its success
let promise1 = new Promise(function(resolve, reject) {
    resolve("I am done");
});
// console.log(promise1)

// // // // promise - reject meansita failure
// let promise2 = new Promise(function(resolve, reject) {
//     reject(new Error('Something is went wrong!'));
// });


//combination
let promise = new Promise(function(resolve, reject) {
  // successs
    resolve("its done");// no issues
    console.log('existed') // this got printed
    // failure onthe same - this is not possible
    reject(new Error('Will this be ignored?')); // ignored
    console.log('After reject')
    resolve("Ignored?"); // ignored
    console.log('After resolve')
  });
 promise
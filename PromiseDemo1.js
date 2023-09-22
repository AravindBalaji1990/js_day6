//promise -resolve
// let promise1 = new Promise(function(resolve, reject) {
//     resolve("I am done");
// });
// console.log(promise1)

//promise - reject
// let promise2 = new Promise(function(resolve, reject) {
    // reject(new Error('Something is went wrong!'));
// });


//combination
let promise = new Promise(function(resolve, reject) {
    // resolve("its done");
  // console.log('existed')
    reject(new Error('Will this be ignored?')); // ignored
    // console.log('After reject')
    // resolve("Ignored?"); // ignored
    // console.log('After resolve')
  });
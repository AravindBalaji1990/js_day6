function someLongRunningFunction() {
    let start = Date.now();
    while (Date.now() - start < 5000) {
    console.log('In while loop');
    }
    return "Hello";
}

console.log('Starting...');

let result = someLongRunningFunction();
console.log(result);

console.log('...Finishing');


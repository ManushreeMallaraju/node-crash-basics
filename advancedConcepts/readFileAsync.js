// NOTE: Write a piece of code to read a file asynchronously/non-blocking way

const fs = require('fs');

let myFun = function () {
    console.log('My function');
}

fs.readFile('./sample.txt', (err, data) => {
    console.log('Data', data);
})

myFun();


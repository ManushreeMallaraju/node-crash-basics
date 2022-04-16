// NOTE: Write a piece of code to read a file synchronously/blocking way

const fs = require('fs');

let myFun = function () {
    console.log('My function');
}

let data = fs.readFileSync('./sample.txt'); // Waits here to print the buffer from the file
console.log('Sync data', data);

myFun(); // then calls myFunc method -> synchronous calling..
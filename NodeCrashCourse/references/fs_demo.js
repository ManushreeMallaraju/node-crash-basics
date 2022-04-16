const fs = require('fs');
const path = require('path');

// Create folder : 'test' inside current directory
// fs.mkdir(
//     path.join(__dirname, '/test'),
//     {},
//     err => {
//         if (err) throw err;
//         console.log('Folder created...');
//     }
// ); // these are asynchronous by default.. takes in a callback..

//NOTE: If the file is already created gives error
// Create and write to file..
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello World!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');
//     }
// ); // these are asynchronous by default.. takes in a callback..


// Editing the written file : writeFile create a new file/ also overwrites it..
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'I love Node.js!',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');

//         // NOTE: File append: callback function
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             'I love Node.js very much!',
//             err => {
//                 if (err) throw err;
//                 console.log('File written to...');
//             }
//         );
//     }
// );

// NOTE: Read File..
// How to appendFile?
// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'utf8', // NOTE: If you don't add encoding, it gonna give raw data=> buffer data
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// Rename file 
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),

    err => {
        if (err) throw err;
        console.log('File renamed...');
    }
);

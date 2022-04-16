const path = require('path');

// Basename : gets the base file name
console.log(path.basename(__filename)); // O/P : path_demo.js

// Directory name
console.log(path.basename(__dirname));

// File extension 
console.log(path.extname(__filename));

// Create path object : gives an object with so many things.
console.log(path.parse(__filename));
console.log(path.parse(__filename).base); // to access just the base

// Concatenate paths : joins..
// ../test/hello.html
// path.join( __current_directory, folderName, fileName)
console.log(path.join(__dirname, 'test', 'hello.html'));

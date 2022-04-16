const { readFileSync, writeFileSync } = require('fs');

// const fs = require('fs');
// fs.readFileSync... 

// In sync opeartions it doen't take a calback..

// NOTE: Syntax: readFileSync(pass file path, encoding)

const first = readFileSync('./content/first.txt',
    'utf8',
);

const second = readFileSync('./content/first.txt',
    'utf8',
);

console.log(first, second);

// NOTE: Creating a new file : 
// writeFileSync : path(folder/fileName), data

writeFileSync('./content/NewFileSyncFromFS.txt',
    `Here is the result : ${first} , ${second}`,
    { flag: 'a' }, // NOTE: To append the data into the file
);
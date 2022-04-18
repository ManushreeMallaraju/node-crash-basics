// TODO: Bug in the code, and fix it

const fs = require('fs');

// funciton should be async or sync 
// could be anything depending on the first argument..


function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        // FIXME: return cb(new TypeError('argument should be string')); Valdation code here is synchronous

        // NOTE: Instead of directly calling the callback, use process.nextTick for the callback
        // and with argument of error that we want....

        return process.nextTick(
            cb,
            new TypeError('argument should be string')
        );
    }

    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        }

        cb(null, stats.size);
    })
}

// Log the file size..
//fileSize(__filename, (err, size) => {

fileSize(1, (err, size) => { // NOTE: creates typeError
    if (err) throw err;

    console.log(`Size in KB : ${size / 1024}`);
});

console.log('Hello!!');


const { readFile, writeFile } = require('fs');

// async operations : need to provide a callback, when the operation is done, this callback will be executed.

// Just like addEventListener..
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) throw err;
    // console.log(result);


    const first = result;

    // NOTE: Callback Hell : read the second file and then write it to the file : 
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) throw err;

        const second = result;

        writeFile(
            './content/NewFileAsyncFromFS.txt',
            `Here is the result : ${first} , ${second}`,
            { flag: 'a' },
            (err, content) => {
                if (err) throw err;
                console.log(content); // will be undefined..
            }
        )
    })
})


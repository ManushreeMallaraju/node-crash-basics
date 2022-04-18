// Course from Brad
// TODO: To work with Node JS, without Express

// Nutshell : Creates a server, that gets a request and response every time a file is sent,
// look in the public folder, if '/' load index.html else load wat ever html content is
// Get the extension, evaluate it and set the content to load

// TODO: Load basic web pages with different content types without Express..
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

    //NOTE: We are checking url, if '/', read the file in index.html, in the public folder
    // then chech for error and set the status and content type
    // and serve the html page

    //console.log(req.url);
    // if (req.url === '/') {
    //     //res.end('<h1>Home</h1>');

    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' }); // writes to the headers
    //             res.end(content);
    //         }
    //     )
    // }

    // // TODO: Load about page
    // if (req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.end(content);
    //         }
    //     )
    // }

    // // NOTE: Serving rest api's should be in the form of json.. 
    // if (req.url === '/api/users') {

    //     // NOTE: we will be fetching data from database and serving that, here hard coding it
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ];

    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // TODO: Make the files dynamic..
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ?
            'index.html' :
            req.url === '/about' ?
                'about.html' :
                req.url
    );

    // Extension of file..
    let extname = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found : load an error page..
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    })
            } else {
                // Some Server error
                res.writeHead(500);
                res.end(`Server Error:  ${err.code}`);
            }
        }
        else {
            //Success 

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');

        }

    })
});

const PORT = process.env.PORT || 5000; // looks for the environment variable and then run on 5000..
// as we cannot make sure always it runs on 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


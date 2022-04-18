const projects = require('./data-store');
const http = require('http');
const url = require('url');

// FIXME: Totally not working

let server;

// Write your server logic here

// create Web server
server = http.createServer((req, res) => {

    let urlObject = url.parse(req.url, true);

    let queryData = urlObject.query;

    //queryData.id 
    if (urlObject.pathname !== '/project') {
        res.writeHead(404);
    }
    else {

        if (urlObject.pathname === '/projects/:id') {

            if (!queryData.id || queryData.id === undefined) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'BAD REQUEST' }));
            }
            else {

                let project = projects.find(project => project.id === queryData.id);

                if (queryData.id && project !== undefined) {
                    res.writeHead(404);
                }
                else {
                    // success
                    res.writeHead(200);
                    res.end(JSON.stringify(project));
                }
            }
        }
    }

})


// For GET requests, send the data from the projects array. 

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    'Listening on 8000';
});

module.exports = server;

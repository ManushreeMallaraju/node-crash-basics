const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => { // this process stays alive, as listen is asynchronous.. 
    // this callback is for setting up the server
    console.log('Server listening on port : 5000....')
})
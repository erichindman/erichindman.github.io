const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(
            fs.readFileSync('./index.html')
        )
    }
    if (req.url === '/style.css') {
        res.end(
            fs.readFileSync('./style.css')
        )
    }
})

server.listen(100);
// create server with HTTP
const http = require('http');
const fs   = require('fs');
const port = 3001;

const server = http.createServer((req, res) => {
    if(req.url === '/api/user') {
        fs.readFile('../app-front/public/data/user.json', (error, data) => {
            if(error) { 
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        })
    } else {
        res.writeHead(404);
        res.end('restricted path');
    }
})

server.listen(port, (error) => {
    if(error) {
        throw new Error(`Something went wrong ${error}`);
    } else {
        console.log(`Server is listening on port ${port}`);
    }    
})
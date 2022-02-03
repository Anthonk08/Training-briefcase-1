const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`Hola Anthony`);
        res.end();
    }

    if (req.url === `/api/courses`) {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
        res.end();
    }
});

const port = 3000;
server.listen(port, () => console.log(`El server ${port} esta correcto!`));

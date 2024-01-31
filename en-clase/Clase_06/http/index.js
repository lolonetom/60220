const http = require('http');

const PORT = 8080;

const server = http.createServer((request, response) => {
    response.end('Mi primer Hola Mundo!! con modulo nativo HTTP_NODEJS')
})

server.listen(PORT, () => {
    console.log(`Server run on PORT: ${PORT}`);
})
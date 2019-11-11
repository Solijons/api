const http = require('http');
const app = require('./app');

const PORT = process.env.NODE_ENV || 3000;
const server = http.createServer(app);

server.listen(PORT);
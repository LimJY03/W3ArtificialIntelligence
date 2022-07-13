const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/example1.html')
});

app.use(express.static('static'));

server.listen(3000, () => {
    console.log('listening - localhost:3000')
});
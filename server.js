const express = require('express');

const server = express();
server.use(express.json());
server.use(express.urlencoded());

server.listen(3001, () => {
    console.log('Server is running!');
});
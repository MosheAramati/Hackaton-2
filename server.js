const express = require('express');

const routerHeroes = require('./routers/heroes.router');

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));

app.use("/", express.static(__dirname + "/public"));

server.listen(3001, () => {
    console.log('Server is running!');
});



server.use('/api/heroes', routerHeroes);

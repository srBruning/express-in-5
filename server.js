// server.js
const express = require('express');
const server = express();

server.get("/json", (req, res) =>{
	res.json({message: "hello world", view_more: "https://github.com/srBruning/express-in-5"});
});

server.get("/", (req, res) =>{
	res.sendFile(__dirname + '/index.html');
});

//servindo arquivos staticos  da pasta public
server.use(express.static('public'));

const port = 4000;

server.listen(port, () =>{
	console.log(`Server listing at ${port}`);
});
// imports
const express = require('express');
const http = require('http');
const path = require('path');

const distPath = 'build';
// app init
const app = express();

app.use(express.static(path.resolve(distPath)));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(distPath, 'index.html'));
})
app.listen(3456);
console.log('listens');
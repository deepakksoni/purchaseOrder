const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');// alternative of string concatenation use for joining path

const api = require('./server/routes/api');

const port = 3000; // specify the port number

const app = express(); // instance of express

app.use(express.static(path.join(__dirname, 'dist'))); // join the current directory with 'dist'folder

app.use(bodyParser.urlencoded({extended: true})); // parser the text to url data
app.use(bodyParser.json()); // parse text to json

app.use('/api', api); //call the api

app.get('*', (req, res) => { //default it will route to html page
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){ //listening the port
    console.log("server is running at " + port);//if it is success
});
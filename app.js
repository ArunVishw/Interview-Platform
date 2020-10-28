const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


const server = require('http').createServer(app);
const io = require('socket.io')(server);

require('./routes/SocketRouter.js')(io);

app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// add middlewares
app.use(express.static(path.join(__dirname, "front-end", "build")));
app.use(express.static("public"));

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "front-end", "build", "index.html"));
// });

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'front-end', 'build')});
 [] });

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendFile(path.join(__dirname, "front-end", "build", "index.html"));
    next();
});

const InfoRouter = require(path.join(__dirname, './routes/InfoRouter'));
app.use('/info', InfoRouter);

const ToolsRouter = require(path.join(__dirname, './routes/ToolsRouter'));
app.use('/tools', ToolsRouter);


const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log('Express server started at port', port)
});
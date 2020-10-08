const path = require('path');

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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


app.get('/', (req, res) => {
    res.end('Hello');
});

app.get('/home', (req, res) => {
    res.end('Hello');
});


const InfoRouter = require(path.join(__dirname, './routes/InfoRouter'));
app.use('/info', InfoRouter);

const ToolsRouter = require(path.join(__dirname, './routes/ToolsRouter'));
app.use('/tools', ToolsRouter);

server.listen(process.env.PORT, () => {
    console.log('Express server started at port',process.env.PORT)
});
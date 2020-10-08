const express = require('express')
const ToolsRouter = express.Router();
const {spawn} = require('child_process');


ToolsRouter.post('/getCodeOutput', (req,res) => {
    var dataToSend;

    // spawn new child process to call the python script
    const python = spawn('python', ['getOutput.py', req.body.lang, req.body.code, req.body.input, req.body.save]);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log(data.toString());
        dataToSend = data.toString('utf8');
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.json(dataToSend);
    });
})

module.exports = ToolsRouter;
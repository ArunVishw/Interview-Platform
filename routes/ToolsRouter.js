const express = require('express')
const ToolsRouter = express.Router();
const {spawn} = require('child_process');


ToolsRouter.post('/getCodeOutput', (req,res) => {
    var dataToSend = {
        'lang': req.body.lang,
        'code': req.body.code,
        'input': req.body.input,
        'save': req.body.save
    };

    // spawn new child process to call the python script
    const python = spawn('python', ['getOutput.py']);

    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });

    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.json(dataToSend);
    });
})

module.exports = ToolsRouter;
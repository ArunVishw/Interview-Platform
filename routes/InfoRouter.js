const express = require('express')
const InfoRouter = express.Router();
const Str = require('@supercharge/strings')
 

InfoRouter.post('/getCodepadLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/codepad/" + roomID;
    res.json({
        link: link
    });
});

InfoRouter.post('/getNotepadLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/notepad/" + roomID;
    res.json({
        link: link
    });
});

InfoRouter.post('/getVideoCallLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/videocall/" + roomID;
    res.json({
        link: link
    });
});

InfoRouter.post('/getCodeVideoLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/code-video/" + roomID;
    res.json({
        link: link
    });
});

InfoRouter.post('/getNoteVideoLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/note-video/" + roomID;
    res.json({
        link: link
    });
});

InfoRouter.post('/getPowerhouseLink', (req, res) => {
    const roomID = Str.random(10) ;
    const link = "http://localhost:3000/tools/powerhouse/" + roomID;
    res.json({
        link: link
    });
});

module.exports = InfoRouter;
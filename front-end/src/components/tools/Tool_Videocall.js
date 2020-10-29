import '../../css/Videocall.css'
import React, { Component } from 'react'
import Peer from "simple-peer";

import socketIOClient from "socket.io-client";
const socket = socketIOClient(process.env.REACT_APP_BACKEND_SOCKET_ENDPOINT);

let localVideo, audioSelect, videoSelect, candidateVideo;
var w = window.innerWidth;
var h = window.innerHeight-168;
let candidateSignal, localStream;
var count=0;


export default class Tool_Videocall extends Component {

    constructor(props) {
        super(props);
        const roomID = this.props.match.params.roomID;
        this.state = {
            roomID: roomID
        }
    }

    componentDidMount = () => {

        localVideo = document.getElementById('localVideo');
        candidateVideo = document.getElementById('candidateVideo');

        audioSelect = document.querySelector('select#audioSource');
        videoSelect = document.querySelector('select#videoSource');

        navigator.mediaDevices.enumerateDevices()
        .then(this.gotDevices).then(this.getStream).catch(this.handleError);

        audioSelect.onchange = this.getStream();
        videoSelect.onchange = this.getStream();

        this.getStream().then(this.getDevices).then(this.gotDevices);

        socket.emit('join', this.state.roomID);

        socket.on('created', function(room, clientId) {
            console.log(`You (${clientId}) have joined the room (${room}`);
        });
        
        socket.on('full', function(room) {
            console.log(`Room (${room}) is full`);
        });

        socket.on('joined', function(room, clientId) {
            console.log(`Client (${clientId}) have joined the room (${room}`);
        });

        socket.on("hey", signal => {
            this.trace("SOMEONE CALLING");
            candidateSignal = signal;
            this.acceptCall();
        });

        socket.on("disconnect", () => {
            this.trace("Call Ended");
            document.getElementById('startCall').style.display = "block";
            document.getElementById('endCall').style.display = "none";
            document.getElementById('candidateDiv').style.display = "none";
            document.getElementById('localVideo').height = h;
            document.getElementById('localVideo').width = w;
            this.setState({ state: this.state });
            localStream.getTracks().forEach(track => track.enabled = !track.enabled);
            this.getStream();
        });

    }

    getDevices = () => {
        return navigator.mediaDevices.enumerateDevices();
    }
      
    gotDevices = (deviceInfos) => {
        window.deviceInfos = deviceInfos; // make available to console
        // console.log('Available input and output devices:', deviceInfos);
        for (const deviceInfo of deviceInfos) {
                const option = document.createElement('option');
                option.value = deviceInfo.deviceId;
            if (deviceInfo.kind === 'audioinput') {
                option.text = deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
                audioSelect.appendChild(option);
            } else if (deviceInfo.kind === 'videoinput') {
                option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
                videoSelect.appendChild(option);
            }
        }
    }
    
    getStream = ( a = true, v = true ) => {
    
        document.getElementById('candidateDiv').style.height = h;
        document.getElementById('candidateDiv').style.width = w;

        if (window.stream) {
            window.stream.getTracks().forEach(track => {
                track.stop();
            });
        }
        
        const audioSource = audioSelect.value;
        const videoSource = videoSelect.value;

        const audio = a ? { deviceId: audioSource ? {exact: audioSource} : undefined } : false;
        const video = v ? { deviceId: videoSource ? {exact: videoSource} : undefined } : false;
        const constraints = {
            audio: audio,
            video: video
        };
        this.trace('Requesting local stream.');
        return navigator.mediaDevices.getUserMedia(constraints).then(this.gotStream).catch(this.handleError);
    }
    
    gotStream = (stream) => {

        window.stream = stream; // make stream available to console
        audioSelect.selectedIndex = [...audioSelect.options].findIndex(option => option.text === stream.getAudioTracks()[0].label);
        videoSelect.selectedIndex = [...videoSelect.options].findIndex(option => option.text === stream.getVideoTracks()[0].label);
        localVideo.srcObject = stream;
        localVideo.muted = true;
        document.getElementById('localVideo').height = h;
        document.getElementById('localVideo').width = w;
        localStream = stream;
        this.trace('Received local stream.');
    }
    
    handleError = (error) => {
        this.trace(`navigator.getUserMedia error: ${error.toString()}.`);
    }
        
    startCall = () => {
        document.getElementById('startCall').style.display = "none";
        document.getElementById('endCall').style.display = "block";
        this.trace('Starting call.');

        const peer1 = new Peer({
            initiator: true,
            trickle: false,
            stream: localStream,
            iceServers: [
                { url: 'stun:stun1.l.google.com:19302' },
                {
                    url: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                }
            ]
        });

        peer1.on('signal', data => {
            this.trace('Working......................');
            if(count<1){
                socket.emit( "callUser", { roomID: this.state.roomID, signal: data });
                count++;    
            }
        });

        peer1.on('stream', stream => {
            this.trace('Partner Stream recieved to original user');
            if(w>992){
                document.getElementById('localVideo').height = 150;
                document.getElementById('localVideo').width = 250;
            }
            else{
                document.getElementById('localVideo').height = 150;
                document.getElementById('localVideo').width = 125;
            }
            document.getElementById('candidateDiv').style.display = "block";
            candidateVideo.srcObject = stream;
        });

        socket.on("callAccepted", (signal) => {
            this.trace("Outgoing call got Accepted");
            peer1.signal(signal);
        });

    }

    acceptCall = () => {
        this.trace("Incoming Call Accepted");
        document.getElementById('startCall').style.display = "none";
        document.getElementById('endCall').style.display = "block";
        const options = {
            initiator: false,
            trickle: false,
            stream: localStream,
            iceServers: [
                { url: 'stun:stun1.l.google.com:19302' },
                {
                    url: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                }
            ]
        };
        const peer2 = new Peer(options);
        
        peer2.on("signal", data => {
            this.trace('Sending candidate signal now');
            socket.emit("acceptCall", { roomID: this.state.roomID, signal: data});
        });

        peer2.on('stream', stream => {
            this.trace('Partner Stream recieved to candidate user');
            if(w>992){
                document.getElementById('localVideo').height = 150;
                document.getElementById('localVideo').width = 250;
            }
            else{
                document.getElementById('localVideo').height = 150;
                document.getElementById('localVideo').width = 125;
            }
            document.getElementById('candidateDiv').style.display = "block";
            candidateVideo.srcObject = stream;
        });

        peer2.signal(candidateSignal);
    }

    endCall = () => {
        document.getElementById('endCall').style.display = "none";
        document.getElementById('startCall').style.display = "block";
        socket.emit("disconnectCall", this.state.roomID)
        this.trace('Ending call.');
    }

    // Logs an action (text) and the time when it happened on the console.
    trace = (text) => {
        text = text.trim();
        const now = (window.performance.now() / 1000).toFixed(3);
        console.log(now, text);
    }

    videoOff = () => {
        document.getElementById('videoOff').style.display = "none";
        document.getElementById('videoOn').style.display = "block";
        // this.getStream( undefined, false );
        // localStream.getVideoTracks()[0].enabled = !(localStream.getVideoTracks()[0].enabled);
        localStream.getVideoTracks().forEach( track => track.enabled = !track.enabled);
        console.log("Vid Off");
    }

    videoOn = () => {
        document.getElementById('videoOn').style.display = "none";
        document.getElementById('videoOff').style.display = "block";
        // this.getStream( undefined, true );
        // localStream.getVideoTracks()[0].enabled = !(localStream.getVideoTracks()[0].enabled);
        localStream.getVideoTracks().forEach( track => track.enabled = !track.enabled);
        console.log("Vid On");
    }

    micOff = () => {
        document.getElementById('micOff').style.display = "none";
        document.getElementById('micOn').style.display = "block";
        // this.getStream( false, undefined );
        // localStream.getAudioTracks()[0].enabled = !(localStream.getAudioTracks()[0].enabled);
        localStream.getAudioTracks().forEach( track => track.enabled = !track.enabled);
        console.log("Mic Off");
    }

    micOn = () => {
        document.getElementById('micOn').style.display = "none";
        document.getElementById('micOff').style.display = "block";
        // this.getStream( true, undefined );
        // localStream.getAudioTracks()[0].enabled = !(localStream.getAudioTracks()[0].enabled);
        localStream.getAudioTracks().forEach( track => track.enabled = !track.enabled);
        console.log("Mic On");
    }

    share = () => {
        var dummy = document.createElement('input'),
        text = window.location.href;
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert("Text copied to clipboard");
    }
        
    render() {
        return (
            <div className="content-wrapper-fixed">
                <div className="" id="video-box">
                    <div className="users" id="localDiv">
                        <video id="localVideo" playsInline muted autoPlay></video>
                    </div>
                    <div className="users" id="candidateDiv">
                        <video width={w} height={h} id="candidateVideo" playsInline autoPlay></video>
                    </div>
                </div>
                <div className="videocall-controls  d-flex flex-row justify-content-center p-3 border-top border-info">
                    <div>
                        <img  data-target="#mymodal" data-toggle="modal" className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" alt="control" id="expandDeviceSelector" src="data:image/png;base64,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"/>
                        <div className="modal fade" id="mymodal">
                            <div className="modal-dialog modal-lg modal-dialog-centered h-100">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="text-success text-center">Choose Audio and Video Source</h4>
                                        <button type="button" name="button" className="close" data-dismiss="modal"> &times; </button>
                                    </div>
                                    <div className="modal-body">
                                            <div className="p-2 text-center">
                                                <label htmlFor="audioSource">Audio source : </label><br/>
                                                <select id="audioSource"></select>
                                            </div>
                                            <div className="p-2 text-center">
                                                <label htmlFor="videoSource">Video source : </label><br/>
                                                <select id="videoSource"></select>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.micOn} alt="control" id="micOn" src="data:image/png;base64,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"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.micOff} alt="control" id="micOff" src="data:image/png;base64,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"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.startCall} alt="control" id="startCall" src="data:image/png;base64,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"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.endCall} alt="control" id="endCall" src="data:image/png;base64,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"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.share} alt="control" id="share" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFCklEQVR4nO2bW2xUVRSGv3VmykCnRsHE0lYfuPpgGkrlFlEEejFAS5C2hgpFRLzERIVSI5GX+oSxCoQQEoMaJQ0kUCFAJsFAK9fwYKSUe4rlBWk7NaWoXMrMcLYPdIZxLp1yOnRPyXxPe++19trr/Nkr57RZI8SRymNqvFIcAEbFM24MbiFcRdEiiv02k701s6S9r5slnpmsPKKqRKiJZ0wLdAtsVnbWbXhJrsdyNuJ5smGwT0FLPGNaYKiCKnycrjyiJsZyjusN0EHVL8qphvCcsjFLKZYiTAsy3xaTovUz5ddo+we9AKGsPKIWirAVGNGz1Gm3MbVmukS8mXEtgURg46uy225jCnC1Z+lp3z1+iuYf8wYUFlY4TfudfGXIGEOplHglGgullEcZ0qHEvNiwf3cjoB5m/8qjKlfgBDC0Z2nBhhmyN9SvNwEkf25ZFaLWAk8+zOGPgFZgp7KlfFm/b4e7r5sqj6oaBVU904YNMyQv1CeiANXV1cbx387VAuWW0n103AS+OOSq+4Y+3IhPDql0YwjXABvgw0566KsxogD5c8s+RdRX/nlmRjoTJ2STlpbWv/T7wLkLlzh/4RIAWZkZdHd303m9K9Rth+9W2vLDh3/sjhVv1VF1HJgOoKBo4wxxBdvtoRsKCyucptxZ65/PeS2Pjz54h5SUgSn/bdt3BgSYPfNlKsrL+L2xiR+27eDyH1f8buV2502AxcS6CYrzyH0BRMgKNYe9BVRKdx49NZ+ZMXJAHz4SIsKk3Bw2r19H2cL5wabygnmllTEDGHQExibPhJvDUOP8o9ycbK0PH4xhGLy3vILS14sDawqq8+aXp/e2T0zuBcYRbnz4DRCe8I+HD3/KcsJWSR02LDC+Hl77rFi2mHFjRvunaXLP+1l/zku4D6FnszIC48ams3i93v/ZbTYbyyoWBS+9QT++aBNOgIkTsklzOgFobXOzact3YSJMfjGHESOG+6dZs4sXxvyjJxphNaEbh8PB4kUlfPv9NgAOHGyg6ex5cnOyyRj5oNydqamBEhHTGA+csnJewgkAULKgiMstV2g4fByAtnY3rgO9fACKZFo9K+FKAO6/+tas/pj3V7wVKIfeMJTZEdMpCgl5A+C+CKULiiieU0Bj01mutbbTdePvML+ddXsqpk/O3n7Q9bOlcxJWAD8Oh4NpUyZFM5vvvr2k1urDQ4KWwEAy2AV4qP8RRGLQCvDntTaWLP/QyJ9X2lJQVDIu9o7IDFoBjp04ibvjLwFGm0ip1TiDVgCvzxcYCzisxhm0AsSLpAC6E9BNUgDdCegmKYDuBHSTFEB3ArpJCqA7Ad0kBdCdgG6SAuhOQDdJAXQnoJukALoT0E1SAN0J6CYpgO4EdJMUQHcCukkKoDsB3Tz2AijBE5gId0Ptj70AItQpaFHQ4lPUhdoTvkWmv6x/RZqBsdHsj/0NiEWYAKL41z+O1KubKHR2BuVmqvD2sT4SLoCoZv84Uq9uIuDxeDl1+syDBTGao3v3TpgADvHUAzcgeq+uTjweL5u2bKXdHeiN7LqVSoPVeBG7rAvmla5W8LV/njEyPaxXVwetbW5OnT4T/PAAqw656jZajRmtzVzyi0pqUfKm1cADgYLaelfdUvrRLmeLZrjSfHHPqOdf+EdgKg9+e5codAGf17vq1tDPXsGYPzQoLi5OvauG5JkmYxHRWwNKuRVy+bZT6k/u2nUnHiH/A+yWdxL+S8VIAAAAAElFTkSuQmCC"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.videoOn} alt="control" id="videoOn" src="data:image/png;base64,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"/>
                    <img className="videocall-icons mx-lg-5 mx-md-4 mx-sm-3 mx-2" onClick={this.videoOff} alt="control" id="videoOff" src="data:image/png;base64,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" />
                </div>
            </div>
        )
    }
};

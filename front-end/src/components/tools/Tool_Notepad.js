import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

const style1={
    marginTop: "12vh",
    borderLeft: "1px solid grey",
    borderTop: "1px solid grey",
    borderRight: "1px solid grey",
}

const style2={
    height: "68vh",
    borderLeft: "1px solid grey",
    borderTop: "1px solid white",
    borderRight: "1px solid grey",
    borderBottom: "1px solid grey",
}

export default class Tool_Notepad extends Component {

    constructor(props) {
        super(props);
        const roomID = this.props.match.params.roomID;
        this.state = {
            text: "Type something here",
            roomID: roomID
        }
        // this.textAreaRef = React.createRef();
    }

    changeText = () => {
        let currentText = document.getElementById('notepad-text').value;
        let data = {
            text: currentText,
            roomID: this.state.roomID
        }
        
        this.setState({
            text: data.text
        });

        socket.emit('updateNotepad',data);
    }

    giveTab = (e) => {
        let textArea = document.getElementById('notepad-text');
        if (e.keyCode === 9 || e.which === 9) {
            e.preventDefault();
            var s = textArea.selectionStart;
            textArea.value = textArea.value.substring(0, textArea.selectionStart) + "\t" + textArea.value.substring(textArea.selectionEnd);
            textArea.selectionEnd = s + 1;
        }
    }
    

    componentWillMount(){
        
        socket.emit('join', this.state.roomID, function (response) {
            console.log(response);
        });

        socket.on('changeNotepad', (content) => {
            // console.log(content);
            this.setState({
                text: content
            });
        });
    }

    componentDidMount = () => {
        var SpeechRecognition = window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.continuous = true;

        recognition.onresult = function (event) {
            var current = event.resultIndex;
            var transcript = event.results[current][0].transcript;
            document.getElementById('notepad-text').value += " " + transcript;
        };

        document.getElementById('record').onclick = function(){
            if( document.getElementById('record').innerHTML === "Start Recording" ){
                recognition.start(); 
                document.getElementById('record').innerHTML = "Stop Recording";
                document.getElementById('instructions-notepad').innerHTML = "Speak to type !";
            }
            else{
                recognition.stop(); 
                document.getElementById('record').innerHTML = "Start Recording";
                document.getElementById('instructions-notepad').innerHTML = "";
            }
        };

        document.getElementById('reset-text').onclick = function(){
            document.getElementById('notepad-text').value = "";
        };
    }


    
    render() {
        return (
            <div className="content-wrapper mx-sm-5">
                <div className="container mb-sm-5">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light"   style={style1}>
                        <Link to="/notepad" className="navbar-brand">NOTEPAD</Link>
                        <span id="instructions-notepad"></span>
                        <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#options-notepad">
                            <span className="navbar-toggler-icon text-dark"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="options-notepad">
                            <ul className="navbar-nav text-center ml-auto">
                                <li className="nav-item nav-link" id="reset-text">Reset</li>
                                <li className="nav-item nav-link" id="record">Start Recording</li>
                            </ul>
                        </div>
                    </nav>
                    <div className="input-group" style={{height: "68vh"}}>
                        <textarea className="form-control"  style={style2} aria-label="white textarea" id="notepad-text" value={this.state.text} onChange={this.changeText} onKeyDown={this.giveTab}></textarea>
                    </div>
                </div>
            </div>
        )
    }
}




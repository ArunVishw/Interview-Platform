import React, { Component } from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/javascript';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/xml';
import 'brace/mode/ruby';
import 'brace/mode/sass';
import 'brace/mode/markdown';
import 'brace/mode/mysql';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/mode/handlebars';
import 'brace/mode/golang';
import 'brace/mode/csharp';
import 'brace/mode/coffee';
import 'brace/mode/css';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/monokai';
import 'brace/theme/github';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/terminal';


import {Link} from 'react-router-dom';

const style1={
    borderLeft: "1px solid grey",
    borderTop: "1px solid grey",
    borderRight: "1px solid grey",
}

const styleContainer = {
    width: "90vw",
    margin: "auto",
    paddingTop: "5vh",
    paddingBottom: "5vh"
}

export default class Tool_Codepad extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            language: "java",
            theme: "monokai",
            output: "run"
        };
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log('change', newValue);
    }

    changeLanguage = (event) => {
        this.setState({
            language: event.currentTarget.innerHTML
        });
    }

    changeTheme = (event) => {
        this.setState({
            theme: event.currentTarget.innerHTML
        });
    }

    updateOutput = (event) => {
        document.getElementById('generated-output').style.display = "block";
        var code = document.getElementById('code-text').innerHTML;
        var input = "";
        var data={
            'lang': this.state.language,
            'code': code,
            'input': input,
            'save': false
        }

        fetch("https://ide.geeksforgeeks.org/main.php",{
            method: 'POST',
            data: data,
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                // this.setState({
                //     output: result
                // });
            },
            (error) => {
                console.log(error);
                // this.setState({
                //     output: error
                // });
            }
        )
        // this.setState({
        //     output: "Output Produced"
        // });
    }

    render() {
        return (
            <div className="row w-100">
                <div style={styleContainer}>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light"   style={style1}>
                        <Link to="/codepad" className="navbar-brand">CODEPAD</Link>
                        <span>{this.state.language}</span>
                        <span>-</span>
                        <span>{this.state.theme}</span>
                        <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#options-notepad">
                            <span className="navbar-toggler-icon text-dark"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="options-notepad">
                            <ul className="navbar-nav text-center ml-auto">
                                {/* <li className="nav-item nav-link" data-toggle="collapse" href="#generated-output" role="button" aria-expanded="false" aria-controls="collapse" onClick={this.updateOutput}>Run</li> */}
                                <li className="nav-item nav-link"  onClick={this.updateOutput}>Run</li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Languages</a>
                                    <div className="dropdown-menu" style={{maxHeight: "30vh", overflowY: "auto"}}>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >java</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >python</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >javascript</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >xml</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >ruby</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >sass</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >markdown</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >mysql</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >json</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >html</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >handlebars</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >golang</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >csharp</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >coffee</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >css</p>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Themes</a>
                                    <div className="dropdown-menu"  style={{maxHeight: "30vh", overflowY: "auto"}}>
                                        <p className="dropdown-item" onClick={this.changeTheme}>monokai</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>github</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>tommorow</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>kuror</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>twilight</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>xcode</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>textmate</p>
                                        <p className="dropdown-item" onClick={this.changeTheme}>terminal</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <AceEditor
                        mode={this.state.language}
                        theme={this.state.theme}
                        onChange={this.onChange}
                        name="code-text"
                        editorProps={{
                            $blockScrolling: true
                        }}
                        style={{width: "100%", fontSize: "1rem", borderBottom: "1px solid black", borderLeft: "1px solid grey", borderRight: "1px solid grey"}}
                    />

                    
                    <div className="col-lg-12 mt-5" id="generated-output" style={{display: "none"}}>
                        <div className="form-group from-group-info-page mt-3">
                            <p className="text-center">Output is : </p>
                            <p className="form-control" id="output-text" >{this.state.output}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

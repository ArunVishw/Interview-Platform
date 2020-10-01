import React, { Component } from 'react'
// import brace from 'brace';
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

var code = "";

function findAppropriateEditor(lang){
    if( lang === 'C') return 'java';
    else if( lang === 'Cpp') return 'java';
    else if( lang === 'Cpp14') return 'java';
    else if( lang === 'Csharp') return 'csharp';
    else if( lang === 'Java') return 'java';
    else if( lang === 'Perl') return 'python';
    else if( lang === 'PHP') return 'html';
    else if( lang === 'Python') return 'python';
    else if( lang === 'Python3') return 'python';
    else if( lang === 'Scala') return 'python';
    else if( lang === 'HTML and JS') return 'html';
    else if( lang === 'XML') return 'xml';
    else if( lang === 'Ruby') return 'ruby';
    else if( lang === 'Sass') return 'sass';
    else if( lang === 'Markdown') return 'markdown';
    else if( lang === 'Mysql') return 'mysql';
    else if( lang === 'Json') return 'json';
    else if( lang === 'Handlebars') return 'handlebars';
    else if( lang === 'Golang') return 'golang';
    else if( lang === 'Coffee') return 'coffee';
    else if( lang === 'Css') return 'css';
}


export default class Tool_Codepad extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            language: "Python3",
            theme: "github"
        };
        
        this.onChange = this.onChange.bind(this);
    }

    onChange(newValue) {
        console.log(newValue);
        code=newValue;
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
        var input =  document.getElementById('input-text').value;
        var data={
            'lang': this.state.language,
            'code': code,
            'input': input,
            'save': false
        }

        fetch("http://localhost:5000/tools/getCodeOutput",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                document.getElementById('output-text').innerText = result;
            },
            (error) => {
                console.log(error);
            }
        )
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
                                <li className="nav-item nav-link"  onClick={this.updateOutput}>
                                    <div className="spinner-border text-danger"></div>
                                    <span>Run</span>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Languages</a>
                                    <div className="dropdown-menu" style={{maxHeight: "30vh", overflowY: "auto"}}>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >C</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Cpp</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Cpp14</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Csharp</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Java</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Perl</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >PHP</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Python</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Python3</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Scala</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >HTML and JS</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >XML</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Ruby</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Sass</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Markdown</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Mysql</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Json</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Handlebars</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Golang</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Coffee</p>
                                        <p className="dropdown-item" onClick={this.changeLanguage} >Css</p>
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
                        mode={findAppropriateEditor(this.state.language)}
                        theme={this.state.theme}
                        onChange={this.onChange}
                        name="code-text"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            'enableBasicAutocompletion': true,
                            'enableLiveAutocompletion': true,
                            'enableSnippets': true
                        }}
                        style={{width: "100%", fontSize: "1rem", borderBottom: "1px solid black", borderLeft: "1px solid grey", borderRight: "1px solid grey"}}
                    />

                    <div className="col-lg-12 mt-5">
                        <div className="form-group from-group-info-page mt-3">
                            <p className="text-center">Enter Input : </p>
                            <textarea className="form-control" id="input-text" ></textarea>
                        </div>
                    </div>
                    
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

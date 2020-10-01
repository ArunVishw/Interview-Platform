import React from 'react'
import '../../css/Options.css'
import { Link } from 'react-router-dom';

export default function Options() {
    return (
        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="row mr-0 pr-0">
                <div className="card mx-2 my-3">
                    <img src="images/videocall.png" className="card-img" alt="videocall" />
                    <div className="card-body">
                        <h6 className="card-title text-center">Video Call Interview</h6>
                        <p className="card-text">This platform boasts flawless video, crystal clear audio and instant sharing capabilities that make it our favorite option for video call interviews.</p>
                        <Link to="/videocall"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
                <div className="card mx-2 my-3">
                    <img src="images/coding-gif.gif" className="card-img"  alt="coding"/>
                    <div className="card-body">
                        <h6 className="card-title text-center">Live Codepad</h6>
                        <p className="card-text">Live codepad is an interview and screening tool designed to let candidates write programs that run. It’s simple, fast, and remarkably powerful.</p>
                        <Link to="/codepad"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
                <div className="card mx-2 my-3">
                    <img src="images/notepad.jpg" className="card-img" alt="notepad"/>
                    <div className="card-body">
                        <h6 className="card-title text-center">Live Notepad</h6>
                        <p className="card-text">Live notepad is your online notepad on the web. It allows you to store notes on the GO without having to Login. Best of all - anotepad is a fast, clean, simple to use and FREE online web notepad.</p>
                        <Link to="/notepad"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
                <div className="card mx-2 my-3">
                    <img src="images/video-note.png" className="card-img" alt="video-note"/>
                    <div className="card-body">
                        <h6 className="card-title text-center">Video call and Notepad</h6>
                        <p className="card-text">Combining video call with live notepad makes the interview process much smooth and gives a flawless experience. With this option Virtual Interviews are no different than f2f interviews.</p>
                        <Link to="/note-video"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
                <div className="card mx-2 my-3">
                    <img src="images/powerhouse.jpg" className="card-img" alt="powerhouse" />
                    <div className="card-body">
                        <h6 className="card-title text-center">Powerhouse Interview</h6>
                        <p className="card-text">Perfect platform to take any kind of interviews. It includes every tool needed for online interviews, having features such as codepad, notepad video and audio call.</p>
                        <Link to="/powerhouse"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
                <div className="card mx-2 my-3">
                    <img src="images/code-video.png" className="card-img" alt="code-video" />
                    <div className="card-body">
                        <h6 className="card-title text-center">Codepad and Video Call</h6>
                        <p className="card-text">Code-debug-execute your logic with explaination in real time with this perfect blend of Codepad and Video call. It includes tools most suited for coding interviews.</p>
                        <Link to="/code-video"><p className="btn btn-success m-auto d-block">View</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

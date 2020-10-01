import React from 'react';
import '../../css/Infopage.css';

export default function NoteVideo() {

    function CopyToClipboard(){

    }

    function JoinLink(){
        var link = document.getElementById('link-text').innerText;
        window.open(link, "_self");
    }

    function GenerateLink(){

        document.getElementById('loading').style.display = "block";
        fetch("http://localhost:5000/info/getNoteVideoLink",{
            method: 'POST',
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                document.getElementById('loading').style.display = "none";
                document.getElementById('generated-link').style.display = "block";
                document.getElementById('link-text').innerText = result.link;
            },
            (error) => {
                console.log("Error Occurred : ", error);
            }
        )
    }
    
    return (
        <div className="content-wrapper">
            <div className="container h-100 container-info-page">
                <div className="row row-info-page h-100">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5">
                        <div className="row row-info-page h-75 my-5">
                            <h1>Video call and Notepad</h1>
                            <p className="">Combining video call with live notepad makes the interview process much smooth and gives a flawless experience. With this option Virtual Interviews are no different than f2f interviews.</p>
                            <div className="row row-info-page">
                                <div className="col-lg-12" id="generated-link">
                                        <div className="form-group from-group-info-page mt-3  text-center">
                                            <p className="form-control" onClick={CopyToClipboard} id="link-text">Copy Link To Share</p>
                                            <p className="btn btn-block btn-primary btn-info mt-2" onClick={JoinLink}>Tap to Join</p>
                                        </div>
                                </div>
                                <div className="spinner-border" role="status" id="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <p className="btn btn-primary a-info-page text-white" onClick={GenerateLink}>Generate Link</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <form className="form-inline">
                                        <div className="form-group form-group-info-page">
                                            <input type="text" className="form-control input-info-page" placeholder="Enter the link"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row row-info-page h-100">
                            <img className="info-img" src="images/video-note.png" alt="videocalling" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import '../../css/Infopage.css';

export default function Powerhouse() {
    return (
        <div className="content-wrapper">
            <div className="container h-100 container-info-page">
                <div className="row row-info-page h-100">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 pr-md-5">
                        <div className="row row-info-page h-75 my-5">
                            <h1>Powerhouse Interview</h1>
                            <p className="">Perfect platform to take any kind of interviews. It includes every tool needed for online interviews, having features such as codepad, notepad video and audio call.</p>
                            <div className="row row-info-page">
                                <div className="collapse col-lg-12" id="generated-link">
                                        <div className="form-group from-group-info-page mt-3  text-center">
                                            <p className="form-control">LINK</p>
                                            <p>Copy the above Link to browser to join.</p>
                                        </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <a className="btn btn-primary a-info-page" data-toggle="collapse" href="#generated-link" role="button" aria-expanded="false" aria-controls="collapse">Generate Link</a>
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
                            <img className="info-img" src="images/powerhouse.jpg" alt="videocalling" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../../css/Carousel.css'

export default function Caraousel() {
    return (
        <div className="carousel slide" id="slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item text-center">
                    <div className="carousel-image-lg"></div>
                    <img src="images/videocall.png" alt="VIDEOCALL"/>
                    <div className="carousel-caption">
                        <h4>Video Call Interview</h4>
                        <p>Have a seemless virtual video call interview with our platform.</p>
                    </div>
                </div>
                <div className="carousel-item active">
                <div className="carousel-image-lg"></div>
                    <img src="images/notepad.jpg" alt="NOTEPAD"/>
                    <div className="carousel-caption">
                        <h4>Virtual Notepad</h4>
                        <p>Now introducing virtual notepad. Share anything anytime with access to anyone you choose. Best suited to share and work together on same note.</p>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="carousel-image-lg"></div>
                    <img src="images/coding-gif.gif" alt="CODING"/>
                    <div className="carousel-caption">
                        <h4>Code Live</h4>
                        <p>Code live and crack interview. With this virtual codepad you can code live and test your code against the test cases provided by interviewer.</p>
                    </div>
                </div>
            </div>

            <ul className="carousel-indicators">
                <li data-target="#slide" data-slide-to="0"></li>
                <li data-target="#slide" data-slide-to="1"  className="active"></li>
                <li data-target="#slide" data-slide-to="2"></li>
            </ul>

            <a href="#slide" data-slide="prev" className="carousel-control-prev">
                <span className="carousel-control-prev-icon"></span>
            </a>

            <a href="#slide" data-slide="next" className="carousel-control-next">
                <span className="carousel-control-next-icon"></span>
            </a>
            
        </div>
    );
}
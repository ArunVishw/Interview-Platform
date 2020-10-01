import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Error.css';

export default function Error() {
    return (
        <div className="content-wrapper-fixed">
            <div className="container text-center">
                <img src="images/oops.jpg" alt="OOPS!" className="error-img"/>
                <h4 className="text-center error-header">The page you were looking for has been remove, had it's name changed or is temporary unavailable.</h4>
                <Link to="/"><p className="btn btn-primary py-2 px-4 btn-6c error-home-btn" href="/" role="button">Go to home page</p></Link>
            </div>
        </div>
    )
}

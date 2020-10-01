import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <Link to="/" className="navbar-brand">INTERVIEW WITH US</Link>
            <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarid">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarid">
                <ul className="navbar-nav text-center ml-auto">
                    <Link to="/"><li className="nav-item nav-link">HOME</li></Link>
                    <Link to="/"><li className="nav-item nav-link">ABOUT</li></Link>
                    <Link to="/"><li className="nav-item nav-link">CONTACT</li></Link>
                </ul>
            </div>
        </nav>
    );
}

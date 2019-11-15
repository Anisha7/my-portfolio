import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navbar extends Component {
    render() {
        return (
        <div className="navbar">
            <ul className="main-logo" >
                <li><Link to="/">anisha</Link></li>  
            </ul>
            
            <ul className="options">
                <li><Link to="/projects">PROJECTS</Link></li>
                <li className="contact"><Link to="/">CONTACT US</Link></li>
            </ul>
        </div>)
    }
}

export default Navbar;
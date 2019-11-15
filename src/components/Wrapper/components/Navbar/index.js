import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import * as smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollToBottom: false,
        }
    }

    render() {
        if ( this.state.scrollToBottom ) {
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
              })
        }

        return (
        <div className="navbar">
            <ul className="main-logo" >
                <li><Link to="/">anisha</Link></li>  
            </ul>
            
            <ul className="options">
                <li><Link to="/projects">PROJECTS</Link></li>
                <li className="contact" onClick={ () => this.setState( { scrollToBottom : true })}><a>CONTACT</a></li>
            </ul>
        </div>)
    }
}

export default Navbar;
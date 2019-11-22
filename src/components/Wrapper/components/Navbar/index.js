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
            scrollToTop: false
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

        if ( this.state.scrollToTop ) {
            console.log("HELLOOO")
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
        }

        const { scrollToProjects, scrollToIntro } = this.props
        return (
        <div className="navbar">
            <ul className="main-logo" >
                <li onClick={ () => this.setState( { scrollToTop : true })}><a>anisha</a></li>  
            </ul>
            
            <ul className="options">
                <li><a onClick={() => scrollToIntro()}>ABOUT</a></li>
                <li><a onClick={() => scrollToProjects()}>PROJECTS</a></li>
                <li className="contact" onClick={ () => this.setState( { scrollToBottom : true })}><a>CONTACT</a></li>

            </ul>
        </div>)
    }
}

export default Navbar;
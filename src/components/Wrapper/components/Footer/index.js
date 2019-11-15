import React, { Component } from 'react';
import './styles.css';

import * as smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollToTop: false,
        }
    }

    render() {
        if ( this.state.scrollToTop ) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
        }

        return (
            <div onClick={ () => this.setState( { scrollToTop : true })} className="footer" />
        )
    }
}

export default Footer;
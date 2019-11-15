import React, { Component } from 'react';
import './styles.css';
import image from '../../../../images/banner.svg';

class Banner extends Component {
    render() {
        return (
                <div className="banner content-margin">
                    <div className="slogan">
                        <h1>I am a <span className="highlight">passionate</span></h1>
                        <h1>frontend engineer.</h1>
                    </div>
                    <img src={ image } alt="Illustration of creative work space" />
                </div>
            )
    }
}

export default Banner;
import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
    render() {
        return (
                <div className="contact content-margin">
                    <h1>Your turn.</h1>
                    <p>Get in touch! How can I help you?</p>
                    <div className="table">
                        <div className="col one">
                            <p>Email me.</p>
                        </div>
                        <div class="hidden-div">
                            <div class="triangle"></div> 
                        </div>
                        <div className="col two">
                            <p>Linkedin connect.</p>
                        </div>
                        <div class="hidden-div-two">
                            <div class="triangle-two"></div> 
                        </div>
                    </div>
                </div>
            )
    }
}

export default Contact;
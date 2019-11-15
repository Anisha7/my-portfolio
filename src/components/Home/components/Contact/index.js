import React, { Component } from 'react';
import './styles.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEmail: false,
        }
    }
    render() {
        let emailText = "Email me."
        if (this.state.showEmail) {
            emailText = "anishaj037@gmail.com"
        }

        return (
                <div className="contact content-margin">
                    <h1>Your turn.</h1>
                    <p>Get in touch! How can I help you?</p>
                    <div className="table">
                        <a href="mailto:anishaj037@gmail.com" className="col one" 
                            onMouseOver={ () => this.setState({ showEmail: true }) }
                            onMouseOut={ () => this.setState({ showEmail: false }) }>
                            <p>{ emailText }</p>
                        </a>
                        <div className="hidden-div">
                            <div className="triangle"></div> 
                        </div>
                        <a href="https://www.linkedin.com/in/annysha/" className="col two" target="_blank">
                            <p>Linkedin connect.</p>
                        </a>
                        <div className="hidden-div-two">
                            <div className="triangle-two"></div> 
                        </div>
                    </div>
                </div>
            )
    }
}

export default Contact;
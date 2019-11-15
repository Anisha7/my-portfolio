import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class Wrapper extends Component {

    render() {
        return (
            <div>
                <Navbar /> 
                boo
                { this.props.children }
                <Footer /> 
            </div>
        )
    }
}

export default Wrapper;
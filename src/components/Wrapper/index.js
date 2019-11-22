import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class Wrapper extends Component {
    
    render() {
        const { scrollToProjects, scrollToIntro } = this.props
        return (
            <div>
                <Navbar scrollToProjects={ scrollToProjects } scrollToIntro={ scrollToIntro } />
                { this.props.children }
                <Footer /> 
            </div>
        )
    }
}

export default Wrapper;
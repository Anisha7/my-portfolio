import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contact from './components/Contact';

class Home extends Component {

    render() {
        return (
                <Wrapper>
                    <Banner />
                    <Intro />
                    <Skills />
                    <Contact />
                </Wrapper>
            )
    }
}

export default Home;
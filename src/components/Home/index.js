import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Skills from './components/Skills';

class Home extends Component {

    render() {
        return (
                <Wrapper>
                    <Banner />
                    <Intro />
                    <Skills />
                </Wrapper>
            )
    }
}

export default Home;
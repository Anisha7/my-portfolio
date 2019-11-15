import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner';
import Intro from './components/Intro';

class Home extends Component {

    render() {
        return (
                <Wrapper>
                    <Banner />
                    <Intro />
                </Wrapper>
            )
    }
}

export default Home;
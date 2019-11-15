import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner';

class Home extends Component {

    render() {
        return (
                <Wrapper>
                    <Banner />
                    Hello
                </Wrapper>
            )
    }
}

export default Home;
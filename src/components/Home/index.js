import React, { Component } from 'react';
import './styles.css'
import Wrapper from '../Wrapper';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToProjects: false,
            scrollToIntro: false,
        }
    }

    render() {
        return (
                <Wrapper 
                    scrollToProjects={ () => this.setState( { scrollToProjects: true } )}
                    scrollToIntro={ () => this.setState( { scrollToIntro: true } )}
                >
                    <Banner />
                    <Intro scroll={ this.state.scrollToIntro } />
                    <Skills />
                    <Projects scroll={ this.state.scrollToProjects } />
                    <Contact />
                </Wrapper>
            )
    }
}

export default Home;
import React, { Component } from 'react';
import './styles.css';

import calcumon from '../../../../images/projects/calcumon.png';
import creditswag from '../../../../images/projects/creditswag.png';
import sadboykj from '../../../../images/projects/sadboykj.png';

const ProjectLineItem = ({ title, description, image, url }) => {
    return (
        <div className="projectLineItem">
            <div>
                <h2><a href={url} target="_blank">{ title }</a></h2>
                <p>{ description }<a href={url} target="_blank">Try me.</a></p>
            </div>
            <a href={url} target="_blank"><img src={ image } alt="project asset" /></a>
        </div>
    )
}

class Projects extends Component {
    render() {

        if (this.props.scroll) {
            this.refs.projects.scrollIntoView({ behavior: "smooth" });
        }


        const projectObjects = [
            {
                title: 'Calcumon',
                description: 'A subscription-based, multiplayer e-learning platform that incentivizes school-aged kids and teens to practice math through engaging challenges, material, and characters.',
                image: calcumon,
                url: 'http://www.calcumon.com/',
            },
            {
                title: 'Credit Swag',
                description: 'A mobile app that simplifies your financial life with progressive goal setting, data visualization, encouraging notifications, and an auto-categorized bill builder.',
                image: creditswag,
                url: 'https://creditswag.herokuapp.com/',
            },
            {
                title: 'Sadboykj concert',
                description: 'A responsive web app that enables event ticket sales in support of a  non-profit concert for local young artists, with customized links for each artist and their albums.',
                image: sadboykj,
                url: 'https://sadboykj.com/',
            },
        ]
        return (
            <div ref="projects" className="projects content-margin">
                <h1>My work.</h1>
                <p>Hi there! This site is one of my creative projects, 
                    where I designed the user interface along with the 
                    assets, but there are more. Check out my passion 
                    projects below:</p>
                <div className="projectsList">
                    { projectObjects.map(({ title, description, image, url}) => {
                        return (
                            <ProjectLineItem key={title} title={ title } description={ description } image={ image } url={ url } />
                        )
                    }) }
                </div>
            </div>
        )
    }
}

export default Projects;
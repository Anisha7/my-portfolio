import React, { Component } from 'react';
import './styles.css';

const ProjectLineItem = ({ title, description, image }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <div>
                <p>{ description }</p>
                <img src={ image } alt="project asset" />
            </div>

        </div>
    )
}

class Projects extends Component {
    render() {
        const projectObjects = [
            {
                title: 'Calcumon',
                description: 'A subscription-based, multiplayer e-learning platform that incentivizes school-aged kids and teens to practice math through engaging challenges, material, and characters.',
                image: '',
            },
            {
                title: 'Credit Swag',
                description: 'A mobile app that simplifies your financial life with progressive goal setting, data visualization, encouraging notifications, and an auto-categorized bill builder.',
                image: '',
            },
            {
                title: 'Sadboykj concert',
                description: 'A responsive web app that enables event ticket sales in support of a  non-profit concert for local young artists, with customized links for each artist and their albums.',
                image: '',
            },
        ]
        return (
            <div className="projects content-margin">
                <h1>My work.</h1>
                <p>Hi there! This site is one of my creative projects, 
                    where I designed the user interface along with the 
                    assets, but there are more. Check out my passion 
                    projects below:</p>
                <div className="projects-list">
                    { projectObjects.map(({ title, description, image}) => {
                        return (
                            <ProjectLineItem title={ title } description={ description } image={ image } />
                        )
                    }) }
                </div>
            </div>
        )
    }
}

export default Projects;
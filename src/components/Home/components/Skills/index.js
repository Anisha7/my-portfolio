import React, { Component } from 'react';
import './styles.css';
import ui from '../../../../images/ui.svg'
import panda from '../../../../images/panda.svg'
import rocket from '../../../../images/rocket.svg'

class Skills extends Component {
    render() {
        return (
                <div className="skills content-margin">
                    <div className="skill">
                        <div className="image">
                            <img src={ ui } alt="UI wireframe and low-fidelity mockup" />
                        </div>
                        <div className="info">
                            <h1>Design experiences for our users.</h1>
                            <p>Leave it to me to turn your idea into a formative, 
                                intuitive, and beautiful design - one that 
                                understands your users’ needs. </p>
                        </div>
                    </div>

                    <div className="skill">
                        <div className="info">
                            <h1>Make designers &amp; users happy.</h1>
                            <p>You’ve already got beautiful designs? 
                                I can help you implement your designer’s 
                                vision with fine detail.</p>
                        </div>
                        <div className="image">
                            <img src={ panda } alt="Cute panda in love" />
                        </div>
                    </div>

                    <div className="skill">
                        <div className="image">
                            <img src={ rocket } alt="Floating rocket" />
                        </div>
                        <div className="info">
                            <h1>Animate graphics &amp; illustrations.</h1>
                            <p>Animated graphics? Text? Illustrations? 
                                Transitions? If you need smooth 
                                animations for anything, just let me know.</p>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Skills;
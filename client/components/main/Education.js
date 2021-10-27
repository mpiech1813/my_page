import React, { Component } from 'react';
import StyCom, { Title } from '../../style';

class Education extends Component {
    render() {
        return (
            <div>
                <StyCom.Break />
                <StyCom.HomePage id='achievements'>
                    <h1>Education</h1>
                    <Title>
                        FULLSTACK DEVELOPER | <strong>FULLSTACK ACADEMY</strong>
                    </Title>
                    <h3>January 2021 — July 2021</h3>
                    <ul>
                        <li>
                            553 hours of rigorous software engineering bootcamp
                            based on group projects and peer programming
                        </li>
                    </ul>
                    <br />
                    <Title>
                        BACHELOR OF SCIENCE | <strong>LOYOLA UNIVERSITY</strong>
                    </Title>
                    <h3>2009 - 2013</h3>
                    <ul>
                        <li>Major: Forensic Science | Minor: Chemistry</li>
                    </ul>
                </StyCom.HomePage>
            </div>
        );
    }
}

export default Education;

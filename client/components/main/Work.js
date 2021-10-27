import React, { Component } from 'react';
import StyCom, { Title } from '../../style';

class Work extends Component {
    render() {
        return (
            <div>
                <StyCom.Break />
                <StyCom.HomePage id='contact'>
                    <h1>Work Experience</h1>
                    <Title>
                        SENIOR DESIGN ENGINEER | <strong>LCP 360</strong>
                    </Title>
                    <h3>October 2014 — Present</h3>
                    <ul>
                        <li>
                            Create and publish 40+ virtual tours of clients a
                            week on their Streetview business listings and
                            websites
                        </li>
                        <li>Resolve escalated technical problems</li>
                        <li>Manage 2 customer support team members</li>
                    </ul>
                    <Title>
                        KRAV MAGA INSTRUCTOR |{' '}
                        <strong>KRAV MAGA ILLINOIS</strong>
                    </Title>
                    <h3>September 2018 — Present</h3>
                    <ul>
                        <li>
                            Teach classes for up to 30 students on personal
                            hand-to-hand defense
                        </li>
                    </ul>
                </StyCom.HomePage>
            </div>
        );
    }
}

export default Work;

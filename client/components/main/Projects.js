import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import { Title, Break } from '../../style';

class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <Break />
                <Title>This is Projects page</Title>
            </div>
        );
    }
}

export default Projects;

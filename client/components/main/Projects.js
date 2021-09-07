import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import { Title, Break } from '../../style';
import { loadComponent } from '../../redux/action';
// import useIntersection from '../../util';
import faker from 'faker';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    actionButton = () => {
        this.props.loadComponent('Projects');
    };

    render() {
        // const ref = document.getElementById('projects');
        // const inViewport = () => useIntersection(ref, '0px');
        const dataArr = new Array(18).fill(faker.lorem.paragraphs());

        // if (inViewport) {
        //     console.log('in viewport');
        // }

        return (
            <div id='projects'>
                <Break />
                <Title>This is Projects page</Title>
                <button onClick={() => this.actionButton()}>Check me</button>
                <div style={{ color: 'green' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.projects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadComponent: () => console.log('Found me'),
        // loadComponent: (name) => dispatch(loadComponent(name)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

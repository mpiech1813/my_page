import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, Break } from '../../style';
import { loadComponent } from '../../redux/action';
import faker from 'faker';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    actionButton = () => {
        console.log(this.props);
    };

    render() {
        const dataArr = new Array(18).fill(faker.lorem.paragraphs());
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
        loadComponent: () => console.log('working'),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

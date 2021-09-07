import React, { Component } from 'react';
import { Title, Break } from '../../style';
import faker from 'faker';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        const dataArr = new Array(18).fill(faker.lorem.paragraphs());
        return (
            <div id='projects'>
                <Break />
                <Title>This is Projects page</Title>
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
        laodComponent: () => console.log('working'),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

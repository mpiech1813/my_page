import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker';

class Contact extends Component {
    render() {
        const dataArr = new Array(10).fill(faker.lorem.paragraphs());
        return (
            <div id='contact'>
                <Title>This is the Contact Section</Title>
                <div style={{ color: 'yellow' }}>
                    {dataArr.map((element, i) => {
                        return <p key={i}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;

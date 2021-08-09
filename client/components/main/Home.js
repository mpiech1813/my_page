import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker';

class Home extends Component {
    render() {
        const dataArr = new Array(10).fill(faker.lorem.paragraphs());
        let key = 0;
        return (
            <div>
                <Title>This is Home page</Title>
                <div style={{ color: 'blue' }}>
                    {dataArr.map((element) => {
                        key++;
                        return <p key={key}>{element}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Home;

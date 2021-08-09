import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker'

class About extends Component {

  render() {
    const dataArr = new Array(10).fill(faker.lorem.paragraphs())
    let key = 0
    return (
      <div>
        <Title>This is the About Me section</Title>
        <div style={{color: 'white'}}>
          {dataArr.map(element => {
            key ++
            // {console.log(key)}
            return <p key={key}>{element}</p>
          })}
        </div>
      </div>
    );
  }
}

export default About;

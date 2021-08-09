import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker'
import { element } from 'prop-types';

class Projects extends Component {

  render() {
    const dataArr = new Array(18).fill(faker.lorem.paragraphs())
    let key = 0 
    return (
      <div>
        <Title>This is Projects page</Title>
        <div style={{color:'green'}}>
          {dataArr.map(element => {
            key++
            return <p key={key}>{element}</p>
          })}
        </div>
      </div>
    );
  }
}

export default Projects;

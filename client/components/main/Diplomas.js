import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker'
import { element } from 'prop-types';

class Diplomas extends Component {

  render() {
    const dataArr = new Array(20).fill(faker.lorem.paragraphs())
    let key = 0
    return (
      <div>
        <Title>This is the Achievement page</Title>
        <div style={{color:'red'}}>
          {dataArr.map(element => {
            key ++
            return <p key={key}>{element}</p>
          })}
        </div>
      </div>
    );
  }
}

export default Diplomas;

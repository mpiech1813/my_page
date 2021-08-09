import React, { Component } from 'react';
import { Title } from '../../style';
import faker from 'faker'
import { element } from 'prop-types';

class Contact extends Component {
  render() {
    const dataArr = new Array(10).fill(faker.lorem.paragraphs())
    let key =0
    return (
      <div>
        <Title>This is the Contact Section</Title>
        <div style={{color:'yellow'}}>
          {dataArr.map(element => {
            key++
            return <p key={key}>{element}</p>
          })}
        </div>
      </div>
    );
  }
}

export default Contact;

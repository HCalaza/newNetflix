import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {

  render() {
    return (

      <div className='tab' activeClassName="active">
        <p className='sectionName'>{this.props.text}</p>
        <div className='indicator'></div>
      </div>

    );
  }
}

export default Tab;

import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <div className='Footer'>
        <p>
          Posted by Braxton Hannah on August 08,2016
        </p>
        <br/>
        <ul className='links'>
          <li><a href='#'>Tweet</a></li>
          <li><a href='#'>Linkedin</a></li>
        </ul>
      </div>
    )
  }
}

export default Footer;

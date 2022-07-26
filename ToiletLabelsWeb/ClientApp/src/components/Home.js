import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hi visitors!</h1>
        <p>This idea came to me during my university studies and it was still in back of my head after 18 years, so I decided to build it to get it out of my head.</p>

        <h2>Basic idea is foollowing:</h2>
        <ul>
          <li>Go to the restaurant.</li>
          <li>At some point you need to go to the toilet.</li>
          <li>If you find two doors with signs for laidies and gentlemen and it bring smile on your face, please send it to me.</li>
        </ul>

        <h2>How to contribute?</h2>
        <ul>
          <li>Take a photo of both signs (laidies and gentlemen).</li>
          <li>Drop it to the email together with name of the place, restaurant url and country where is it from. You can also add your name if you like.</li> 
          <li>Send it to me on hausterlitz@gmail.com</li>
          <li>I'll decide if it will be added to this galery.</li>
        </ul>

        <h2>Quiz</h2>
            <p>Lets stop talking and have some fun...</p>
            <NavLink tag={Link} className="dashboard-selector" to="/labels">Take a quiz</NavLink>
        <p></p>
      </div>
    );
  }
}

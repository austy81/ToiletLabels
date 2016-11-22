import React, { Component } from 'react';
import './App.css';
//import Button from 'react-bootstrap/lib/Button';

class App extends Component {
  buttonClick(step) {
    alert(step);
  }
  starClick(stars) {
    alert(stars);
  }
  render() {
    var Button = require('react-bootstrap').Button;
    var Image = require('react-bootstrap').Image;
    return (
      <div>
       <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand"><strong>Toilet labels</strong></div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="getLinkStyle('')"><a>Toilet show</a></li>
              <li className="getLinkStyle('/add')"><a>Add label</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Button className="col-xs-6" bsStyle="default" onClick={this.buttonClick.bind(this,-1)}>&lt; &lt;</Button>
          <Button className="col-xs-6" bsStyle="default" onClick={this.buttonClick.bind(this,1)}>&gt; &gt;</Button>
        </div>
        <div className="row">
          &nbsp;
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Image src="/assets/1.jpg" rounded className="img-responsive" />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Image src="/assets/1.jpg" rounded className="img-responsive" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 text-center">
            <ul className="h2">
              <li className="glyphicon glyphicon-star" onClick={this.starClick.bind(this,1)}></li>
              <li className="glyphicon glyphicon-star" onClick={this.starClick.bind(this,2)}></li>
              <li className="glyphicon glyphicon-star" onClick={this.starClick.bind(this,3)}></li>
              <li className="glyphicon glyphicon-star" onClick={this.starClick.bind(this,4)}></li>
              <li className="glyphicon glyphicon-star-empty" onClick={this.starClick.bind(this,5)}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

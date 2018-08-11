import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import { Home } from '../components/Home.js';
import { connect } from 'react-redux';

class HomePage extends Component {

  randomBird = (birds) => {
    return birds[Math.floor(Math.random() * birds.length)];
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">birdable</h1>
          <p>an online resource for improving bird identification skills</p>
          <NavBar />
        </header>
        <Home bird={this.randomBird(this.props.birds)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(HomePage);
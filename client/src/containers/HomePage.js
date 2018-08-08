import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">birdable</h1>
          <p>an online resource for improving bird identification skills</p>
          <NavBar />
        </header>
      </div>
    )
  }
}

export default HomePage;
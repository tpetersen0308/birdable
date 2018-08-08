import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchBirds } from './actions/fetchBirds.js';
import BirdsList from './BirdsList.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchBirds();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BirdsList birds={this.props.birds} />
      </div>
    );
  }
}

App.defaultProps = {
  birds: [],
}

function mapDispatchToProps(dispatch) {
  return { fetchBirds: () => dispatch(fetchBirds()) }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { fetchBirds } from '../actions/fetchBirds.js';
import NavBar from './NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchBirds();
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <header className="App-header">
          <h1 className="App-title">birdable</h1>
          <NavBar />
        </header>
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

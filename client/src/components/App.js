import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { fetchBirds } from '../actions/fetchBirds.js';
import BirdsPage from '../containers/BirdsPage.js';
import ExercisePage from '../containers/BirdsFilter';
import HomePage from '../containers/HomePage.js';
import Exercise from '../containers/Exercise.js';
import NavBar from './NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchBirds();
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">birdable</h1>
              <p>an online resource for improving bird identification skills</p>
              <NavBar />
            </header>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/birds' component={BirdsPage} />
            <Route exact path='/exercises' component={ExercisePage} />
            <Route path='/exercises/problem' component={Exercise} />
            <Route path='/exercises/solution' component={Exercise} />
          </div>
        </Router>
      </div>
    );
  }
}

App.defaultProps = {
  birds: [],
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBirds: () => dispatch(fetchBirds()),
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

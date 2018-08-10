import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { fetchBirds } from '../actions/fetchBirds.js';
import BirdsPage from '../containers/BirdsPage.js';
import ExercisePage from '../containers/ExercisePage.js';
import HomePage from '../containers/HomePage.js';
import Exercise from '../containers/Exercise.js';

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
            <Route path='/' component={HomePage} />
            <Route path='/birds' component={BirdsPage} />
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
  return { fetchBirds: () => dispatch(fetchBirds()) }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

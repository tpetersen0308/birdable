import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import BirdsPage from './BirdsPage.js';
import ExercisePage from './ExercisePage.js';
import HomePage from './HomePage.js';
import Exercise from './Exercise.js';
import NavBar from '../components/NavBar.js';
import { fetchBird } from '../actions/birdActions.js';

class App extends Component {
  componentWillMount() {
    this.props.fetchBird();
  }
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">birdable</h1>
              <p>an online resource for practicing bird identification</p>
              <NavBar />
            </header>
            <div className="main-content">
              <Route exact path='/' component={HomePage} />
              <Route exact path='/browse' component={BirdsPage} />
              <Route exact path='/practice' component={ExercisePage} />
              <Route path='/practice/exercise' component={Exercise} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBird: () => dispatch(fetchBird()),
  }
}

export default connect(null, mapDispatchToProps)(App);

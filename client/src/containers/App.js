import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchBirds } from '../actions/fetchBirds.js';
import BirdsPage from './BirdsPage.js';
import ExercisePage from './ExercisePage.js';
import HomePage from './HomePage.js';
import Exercise from './Exercise.js';
import NavBar from '../components/NavBar.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchBirds();
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">birdable</h1>
              <p>an online resource for practicing bird identification</p>
              <NavBar />
            </header>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/browse' component={BirdsPage} />
            <Route exact path='/practice' component={ExercisePage} />
            <Route path='/practice/exercise' component={Exercise} />
            {/* <Route path='/exercises/solution' component={Exercise} /> */}
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

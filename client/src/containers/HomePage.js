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
        {this.props.loading ? <h4>loading...</h4> : <Home bird={this.randomBird(this.props.birds)} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(HomePage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bird } from '../components/Bird.js';

class HomePage extends Component {

  randomBird = (birds) => {
    return birds[Math.floor(Math.random() * birds.length)];
  }

  render() {
    return (
      <div>
        <br />
        <h3>Look at this cool bird!</h3>
        <br />
        {this.props.loading ? <h4>loading...</h4> : <Bird bird={this.randomBird(this.props.birds)} />}
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
import React, { Component } from 'react';
import BirdsFilter from './BirdsFilter';

class BirdsPage extends Component {

  submitForBrowse = () => {
    this.props.history.push('/birds');
  }
  render() {
    return (
      <div>
        <br />
        <h4>Select families and regions to browse, or click 'Go!' to see them all!</h4>
        <br />
        <BirdsFilter handleSubmitRoute={this.submitForBrowse} />
      </div>
    )
  }
}

export default BirdsPage;
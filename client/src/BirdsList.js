import React, { Component } from 'react';

class BirdsList extends Component {
  render() {
    debugger
    let birdImages = this.props.birds.map(bird => <p><img src={bird.image} alt={bird.common_name} /></p>)
    return (
      { birdImages }
    )
  }
}


export default BirdsList;
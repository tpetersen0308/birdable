import React, { Component } from 'react';

class BirdsList extends Component {
  render() {

    let birdImages = this.props.birds.map(bird => <p><img src={bird.image} alt={bird.common_name} /></p>)

    return (
      <div>
        {birdImages}
      </div>
    )
  }
}

export default BirdsList;
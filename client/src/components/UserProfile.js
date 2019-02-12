import React, { Component } from 'react';
import { Panel, Image, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { toTitleCase } from '../index.js';
import { connect } from 'react-redux';
import { fetchTopBirds } from '../actions/userActions';
import LikeButton from './LikeButton.js';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopBirds(this.props.user.currentUser.id);
  }

  identificationRate = (stats) => {
    return Math.floor((stats.filter(stat => stat.correct === true).length / stats.length) * 100) || 0;
  }

  getFavoriteBirds = (user) => {
    return <ListGroupItem id="favorite-birds"><Table>{user.birds.map(bird => {
      return <tr>
        <td>
          <LikeButton
            birdId={bird.id}
          />
        </td>
        <td>{toTitleCase(bird.common_name)}</td>
        <td><Image className="fav-bird-image" src={bird.image} /></td>
      </tr>
    })}</Table></ListGroupItem>
  }

  getTopBirds = (topBirds) => {
    if (topBirds && topBirds.length > 0) {
      return <ol className="top-birds-list">{topBirds.map(bird => {
        return <li>{toTitleCase(bird.common_name)}</li>
      })}</ol>
    } else {
      return "You have not yet identified any birds."
    }
  }

  render() {
    return (
      <div>
        <Panel bsStyle="primary" className="user-profile">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Welcome to birdable, {this.props.user.currentUser.first_name}!</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Image src={this.props.user.currentUser.image_url} circle />
            <h4>Your Stats:</h4>
            <ListGroup>
              {this.props.loading ? <ListGroupItem>Loading...</ListGroupItem> :
                <div>
                  <ListGroupItem><strong>Identification Rate:</strong> {this.identificationRate(this.props.user.currentUser.stats)}%</ListGroupItem>
                  <ListGroupItem><strong>Top Birds:</strong> {this.getTopBirds(this.props.user.topBirds)}</ListGroupItem>
                </div>
              }
            </ListGroup>
            {this.props.user.currentUser.birds.length > 0 &&
              <div>
                <h4>Your Favorite Birds:</h4>
                <ListGroup >
                  {this.getFavoriteBirds(this.props.user.currentUser)}
                </ListGroup>
              </div>
            }
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopBirds: user_id => dispatch(fetchTopBirds(user_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


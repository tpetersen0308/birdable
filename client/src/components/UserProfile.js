import React from 'react';
import { Panel, Image, ListGroupItem } from 'react-bootstrap';
import { toTitleCase } from '../index.js';

export const UserProfile = (props) => {
  const identificationRate = (stats) => {
    return Math.floor((stats.filter(stat => stat.correct === true).length / stats.length) * 100);
  }

  const getTopBirds = (stats, birds) => {
    let correctStatsByBirdId = {};
    let topBirdIds = [];
    let topBirdId = null;
    let max = 0;

    for (let stat of stats.filter(stat => stat.correct === true)) {
      correctStatsByBirdId[stat.bird_id] = correctStatsByBirdId[stat.bird_id] + 1 || 1;
    }

    let n = Object.keys(correctStatsByBirdId).length >= 5 ? 5 : Object.keys(correctStatsByBirdId).length;

    for (let i = 0; i < n; i++) {
      for (let id in correctStatsByBirdId) {
        if (max < correctStatsByBirdId[id]) {
          max = correctStatsByBirdId[id];
          topBirdId = id;
        }
      }
      topBirdIds.push(topBirdId);
      delete correctStatsByBirdId[topBirdId];
      max = 0;
    }
    return <ol>{topBirdIds.map(id => toTitleCase(birds.find(bird => bird.id === parseInt(id)).common_name)).map(bird => {
      return <li>{bird}</li>
    })}</ol>
  }
  return (
    <div>
      <Panel bsStyle="primary" className="user-profile">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Welcome to birdable, {props.user.first_name}!</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Image src={props.user.image_url} circle />
          <h4>Your Stats:</h4>
          {props.loading ? <ListGroupItem>Loading...</ListGroupItem> :
            <div>
              <ListGroupItem><strong>Identification Rate:</strong> {identificationRate(props.user.stats)}%</ListGroupItem>
              <ListGroupItem><strong>Top Birds:</strong> {getTopBirds(props.user.stats, props.birds)}</ListGroupItem>
            </div>}
        </Panel.Body>
      </Panel>
    </div>
  )
}


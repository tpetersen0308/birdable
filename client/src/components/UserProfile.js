import React from 'react';
import { Panel, Image, ListGroupItem } from 'react-bootstrap';

export const UserProfile = (props) => {
  const identificationRate = (stats) => {
    return Math.floor((stats.filter(stat => stat.correct === true).length / stats.length) * 100);
  }

  const getTopBirds = (stats, birds) => {
    let correctStatsByBirdId = {};
    let topBirdIds = [];
    let topBirdId = null;
    let counter = 0;
    let max = 0;

    for (let stat of stats.filter(stat => stat.correct === true)) {
      correctStatsByBirdId[stat.bird_id] = correctStatsByBirdId[stat.bird_id] + 1 || 1;
    }

    while (counter < 5 && Object.keys(correctStatsByBirdId).length > 0) {
      for (let stat in correctStatsByBirdId) {
        if (max < correctStatsByBirdId[stat.bird_id]) {
          max = correctStatsByBirdId[stat.bird_id];
          topBirdId = stat.bird_id;
        }
      }
      topBirdIds.push(topBirdId);
      delete correctStatsByBirdId[topBirdId];
      counter++
    }

    return topBirdIds.map(id => birds.find(bird => bird.id === id).common_name);
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
          <ListGroupItem><strong>Identification Rate:</strong> {identificationRate(props.user.stats)}%</ListGroupItem>
          <ListGroupItem><strong>Top Birds:</strong> {getTopBirds(props.user.stats)}</ListGroupItem>
        </Panel.Body>
      </Panel>
    </div>
  )
}
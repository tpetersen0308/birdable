import React from 'react';
import { Panel, Image, ListGroupItem } from 'react-bootstrap';

export const UserProfile = (props) => {
  const identificationRate = (stats) => {
    return Math.floor((stats.filter(stat => stat.correct === true).length / stats.length) * 100);
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
        </Panel.Body>
      </Panel>
    </div>
  )
}
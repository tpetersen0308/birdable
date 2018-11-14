import React from 'react';
import { Panel, Image } from 'react-bootstrap';

export const UserProfile = (props) => {
  return (
    <div>
      <Panel bsStyle="primary" className="user-profile">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Welcome to birdable, {props.user.first_name}!</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Image src={props.user.image_url} circle />
        </Panel.Body>
      </Panel>
    </div>
  )
}
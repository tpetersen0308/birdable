import React from 'react';
import { Button, Checkbox, DropdownButton } from 'react-bootstrap';
import { toTitleCase } from '../index.js';


export const BirdFilter = (props) => {
  return (
    <div id="filter-dropdown">
      <DropdownButton
        bsStyle="warning"
        bsSize="large"
        title="Families"
      >
        {props.families.map(family => <Checkbox onChange={props.handleFamilyCheckbox} value={family}>{toTitleCase(family)}</Checkbox>)}
      </DropdownButton>
      {'  '}
      <DropdownButton
        bsSize="large"
        bsStyle='warning'
        title="Regions"
      >
        {props.regions.map(region => <Checkbox onChange={props.handleRegionCheckbox} value={region}>{toTitleCase(region)}</Checkbox>)}
      </DropdownButton>
      {'  '}
      <Button bsSize="large" type="submit" onClick={props.handleSubmit}>Go!</Button>
    </div>
  )
}
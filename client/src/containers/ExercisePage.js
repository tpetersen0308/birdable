import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, DropdownButton } from 'react-bootstrap';

class ExercisePage extends Component {
  render() {
    return (
      <div>
        <h4>Select which regions and families you would like to test your knowledge of below:</h4>
        <ButtonToolbar className="filter-options">
          <DropdownButton>

          </DropdownButton>
        </ButtonToolbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(ExercisePage)
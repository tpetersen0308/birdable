import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExercisePage extends Component {
  render() {
    return (
      <div>
        <h3>Select which regions and families you would like to test your knowledge of below:</h3>
        {/* ADD DROPDOWN MENUS HERE */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(ExercisePage)
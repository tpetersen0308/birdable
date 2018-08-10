import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import '../index.css';

class ExercisePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedBirds: [],
      selectedFamilies: [],
      selectedRegions: [],
    }
  }

  selectFamily = event => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.concat(event.target.value)
    }, () => console.log(this.state.selectedFamilies))
  }

  selectRegion = event => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.concat(event.target.value)
    }, () => console.log(this.state.selectedRegions))
  }

  deselectFamily = event => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.filter(family => family !== event.target.value)
    }, () => console.log(this.state.selectedFamilies))
  }

  deselectRegion = event => {

  }

  render() {
    const taxonomicFamilies = ["all", "albatrosses", "anhingas", "auks-murres-puffins", "barn-owls", "becards-tityras-and-allies", "blackbirds-and-orioles", "boobies-and-gannets", "bushtits", "cardinals-grosbeaks-and-buntings", "chachalacas", "chickadees-and-titmice", "cormorants", "cranes", "creepers", "crows-magpies-jays", "cuckoos-roadrunners-anis", "dippers", "ducks-and-geese", "falcons", "finches", "frigatebirds", "gnatcatchers", "grebes", "gulls-and-terns", "hawks-and-eagles", "herons-egrets-bitterns", "hummingbirds", "ibises-and-spoonbills", "kingfishers", "kinglets", "larks", "leaf-warblers", "longspurs-and-snow-buntings", "loons", "lovebirds-and-australasian-parrots", "mockingbirds-and-thrashers", "new-world-quail", "new-world-sparrows", "new-world-vultures", "nightjars", "northern-storm-petrels", "nuthatches", "old-world-flycatchers", "old-world-sparrows", "olive-warblers", "ospreys", "owls", "oystercatchers", "pelicans", "pheasants-and-grouse", "pigeons-and-doves", "plovers", "rails-gallinules-coots", "sandpipers", "shearwaters-and-petrels", "shrikes", "silky-flycatchers", "skuas-and-jaegers", "southern-storm-petrels", "starlings-and-mynas", "stilts-and-avocets", "storks", "swallows", "swifts", "sylviid-warblers", "thrushes", "trogons", "tropicbirds", "tyrant-flycatchers", "verdins", "vireos", "wagtails-and-pipits", "waxwings", "wood-warblers", "woodpeckers", "wrens", "yellow-breasted-chats"];
    const regions = ["all", "alaska-and-the-north", "california", "eastern-canada", "florida", "great-lakes", "mid-atlantic", "new-england", "northwest", "plains", "rocky-mountains", "southeast", "southwest", "texas", "western-canada"];
    const familyMenuItems = taxonomicFamilies.map(family => <option value={family} onClick={this.selectFamily}>{family}</option>)
    const regionMenuItems = regions.map(region => <option value={region} onClick={this.selectRegion}>{region}</option>)

    return (
      <div>
        <h4>Select which regions and families you would like to test your knowledge of below:</h4>
        <div class="filter-options">
          <Form inline>
            <FormGroup controlId="formControlsSelectMultiple">
              <p><ControlLabel>Families</ControlLabel></p>
              <FormControl componentClass="select" multiple>
                {familyMenuItems}
              </FormControl>
            </FormGroup>
            {"   "}
            <FormGroup controlId="formControlsSelectMultiple">
              <p><ControlLabel>Regions</ControlLabel></p>
              <FormControl componentClass="select" multiple>
                {regionMenuItems}
              </FormControl>
            </FormGroup><br /><br />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(ExercisePage)
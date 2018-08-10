import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import { toTitleCase, urlSafeString } from '../index.js';
import { selectBirds } from '../actions/exerciseActions.js';
import '../index.css';

class ExercisePage extends Component {
  constructor() {
    super();
    this.state = {
      selectedFamilies: [],
      selectedRegions: [],
    }
  }

  handleFamilyCheckbox = event => {
    if (event.target.checked) {
      this.selectFamily(event.target.value);
    } else {
      this.deselectFamily(event.target.value);
    }
  }

  handleRegionCheckbox = event => {
    if (event.target.checked) {
      this.select(event.target.value);
    } else {
      this.deselect(event.target.value);
    }
  }

  selectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.concat(family)
    }, () => console.log(this.state.selectedFamilies))
  }

  selectRegion = event => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.concat(event.target.value)
    }, () => console.log(this.state.selectedRegions))
  }

  deselectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.filter(familyName => familyName !== family)
    }, () => console.log(this.state.selectedFamilies))
  }

  deselectRegion = event => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.filter(region => region !== event.target.value)
    }, () => console.log(this.state.selectedRegions))
  }

  filterByFamilies = (birds, families) => {
    if (families.length > 0) {
      birds = birds.filter(bird => families.includes(bird.family))
    }
    return birds
  }

  filterByRegions = (birds, regions) => {
    if (regions.length > 0) {
      for (let regionName of regions) {
        birds = birds.filter(bird => bird.regions.map(region => region.name).includes(regionName))
      }
    }
    return birds
  }

  handleSubmit = event => {
    event.preventDefault();

    let birds = this.props.birds;
    birds = this.filterByFamilies(birds, this.state.selectedFamilies);
    birds = this.filterByRegions(birds, this.state.selectedRegions);

    this.props.selectBirds(birds);

    this.props.history.push('/exercises/problem');
  }

  render() {
    const taxonomicFamilies = ["albatrosses", "anhingas", "auks, murres, puffins", "barn owls", "becards, tityras and allies", "blackbirds and orioles", "boobies and gannets", "bushtits", "cardinals, grosbeaks and buntings", "chachalacas", "chickadees and titmice", "cormorants", "cranes", "creepers", "crows, magpies, jays", "cuckoos, roadrunners, anis", "dippers", "ducks and geese", "falcons", "finches", "frigatebirds", "gnatcatchers", "grebes", "gulls and terns", "hawks and eagles", "herons, egrets, bitterns", "hummingbirds", "ibises and spoonbills", "kingfishers", "kinglets", "larks", "leaf-warblers", "longspurs and snow buntings", "loons", "lovebirds and australasian parrots", "mockingbirds and thrashers", "new world quail", "new world sparrows", "new world vultures", "nightjars", "northern storm-petrels", "nuthatches", "old world flycatchers", "old world sparrows", "olive warblers", "ospreys", "owls", "oystercatchers", "pelicans", "pheasants and grouse", "pigeons and doves", "plovers", "rails, gallinules, coots", "sandpipers", "shearwaters and petrels", "shrikes", "silky-flycatchers", "skuas and jaegers", "southern storm-petrels", "starlings and mynas", "stilts and avocets", "storks", "swallows", "swifts", "sylviid warblers", "thrushes", "trogons", "tropicbirds", "tyrant flycatchers", "verdins", "vireos", "wagtails and pipits", "waxwings", "wood warblers", "woodpeckers", "wrens", "yellow-breasted chats"];
    const regions = ["alaska and the north", "california", "eastern canada", "florida", "great lakes", "mid atlantic", "new england", "northwest", "plains", "rocky mountains", "southeast", "southwest", "texas", "western canada"];
    const familyMenuItems = taxonomicFamilies.map(family => <option value={family} onClick={this.selectFamily}>{toTitleCase(family)}</option>)
    const regionMenuItems = regions.map(region => <option value={region} onClick={this.selectRegion}>{toTitleCase(region)}</option>)

    return (
      <div>
        <h4>Select families and regions to practice identifying:</h4>
        {/* <div id="filter-options">
          <Form inline onSubmit={this.handleSubmit}>
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
        <div id='selected-filters'>
          <Form inline>
            <FormGroup controlId="formControlCheckboxMultiple">
              <p><ControlLabel>Selected Families:</ControlLabel></p>
              {this.state.selectedFamilies.map(family => <p><Checkbox checked value={family} onChange={this.deselectFamily} >{toTitleCase(family)}</Checkbox></p>)}
            </FormGroup>
            {"            "}
            <FormGroup controlId="formControlCheckboxMultiple">
              <p><ControlLabel>Selected Regions:</ControlLabel></p>
              {this.state.selectedRegions.map(region => <p><Checkbox checked value={region} onChange={this.deselectRegion}>{toTitleCase(region)}</Checkbox></p>)}
            </FormGroup>
          </Form>
        </div> */}


        <div id="filter-dropdown">
          <DropdownButton title="Families">
            {taxonomicFamilies.map(family => <Checkbox onChange={this.handleFamilyCheckbox} value={family}>{toTitleCase(family)}</Checkbox>)}
          </DropdownButton>
          {'  '}
          <DropdownButton title="Regions">
            {regions.map(region => <Checkbox onChange={this.handleRegionCheckbox} value={region}>{toTitleCase(region)}</Checkbox>)}
          </DropdownButton>
          {'  '}
          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    exercise: {
      birdSelection: state.exercise.birdSelection,
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { selectBirds: (birds) => dispatch(selectBirds(birds)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage)
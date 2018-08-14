import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, DropdownButton } from 'react-bootstrap';
import { toTitleCase } from '../index.js';
import { selectBirdsForExercise } from '../actions/exerciseActions.js';
import '../index.css';

class BirdsFilter extends Component {
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
      this.selectRegion(event.target.value);
    } else {
      this.deselectRegion(event.target.value);
    }
  }

  selectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.concat(family)
    }, () => console.log(this.state.selectedFamilies))
  }

  selectRegion = region => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.concat(region)
    }, () => console.log(this.state.selectedRegions))
  }

  deselectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.filter(familyName => familyName !== family)
    }, () => console.log(this.state.selectedFamilies))
  }

  deselectRegion = region => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.filter(regionName => regionName !== region)
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

    this.props.selectBirdsForExercise(birds);

    this.props.handleSubmitRoute();
  }

  render() {
    const taxonomicFamilies = ["albatrosses", "anhingas", "auks, murres, puffins", "barn owls", "becards, tityras and allies", "blackbirds and orioles", "boobies and gannets", "bushtits", "cardinals, grosbeaks and buntings", "chachalacas", "chickadees and titmice", "cormorants", "cranes", "creepers", "crows, magpies, jays", "cuckoos, roadrunners, anis", "dippers", "ducks and geese", "falcons", "finches", "frigatebirds", "gnatcatchers", "grebes", "gulls and terns", "hawks and eagles", "herons, egrets, bitterns", "hummingbirds", "ibises and spoonbills", "kingfishers", "kinglets", "larks", "leaf-warblers", "longspurs and snow buntings", "loons", "lovebirds and australasian parrots", "mockingbirds and thrashers", "new world quail", "new world sparrows", "new world vultures", "nightjars", "northern storm-petrels", "nuthatches", "old world flycatchers", "old world sparrows", "olive warblers", "ospreys", "owls", "oystercatchers", "pelicans", "pheasants and grouse", "pigeons and doves", "plovers", "rails, gallinules, coots", "sandpipers", "shearwaters and petrels", "shrikes", "silky-flycatchers", "skuas and jaegers", "southern storm-petrels", "starlings and mynas", "stilts and avocets", "storks", "swallows", "swifts", "sylviid warblers", "thrushes", "trogons", "tropicbirds", "tyrant flycatchers", "verdins", "vireos", "wagtails and pipits", "waxwings", "wood warblers", "woodpeckers", "wrens", "yellow-breasted chats"];
    const regions = ["alaska and the north", "california", "eastern canada", "florida", "great lakes", "mid atlantic", "new england", "northwest", "plains", "rocky mountains", "southeast", "southwest", "texas", "western canada"];

    return (
      <div>
        {this.props.loading ? <h4>loading...</h4> :
          <div id="filter-dropdown">
            <DropdownButton
              bsStyle="warning"
              bsSize="large"
              title="Families"
            >
              {taxonomicFamilies.map(family => <Checkbox onChange={this.handleFamilyCheckbox} value={family}>{toTitleCase(family)}</Checkbox>)}
            </DropdownButton>
            {'  '}
            <DropdownButton
              bsSize="large"
              bsStyle='warning'
              title="Regions"
            >
              {regions.map(region => <Checkbox onChange={this.handleRegionCheckbox} value={region}>{toTitleCase(region)}</Checkbox>)}
            </DropdownButton>
            {'  '}
            <Button bsSize="large" type="submit" onClick={this.handleSubmit}>Go!</Button>
          </div>}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    exercise: {
      birdSelection: state.exercise.birdSelection,
    },
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return { selectBirdsForExercise: (birds) => dispatch(selectBirdsForExercise(birds)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdsFilter)
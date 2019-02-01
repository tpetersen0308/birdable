/* 
    BirdsFilter component renders dropdown menus with filtering options for
    exercises and browsing, filters the appropriate collection of birds based
    on user selections, and adds the collection to state and handles routing 
    based on which functions are passed in as props.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, DropdownButton } from 'react-bootstrap';
import { toTitleCase } from '../index.js';
import { fetchBirds, clearBirds } from '../actions/birdActions';
import '../index.css';

class BirdsFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedFamilies: [],
      selectedRegions: [],
      selectedFavorites: [],
      allFavoritesSelected: false,
      loading: false,
    }
  }

  /* 
      selectFamily() function takes a family-name string as an argument
      and adds it to the selectedFamilies array in state.
  */
  selectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.concat(family)
    }, () => console.log(this.state.selectedFamilies))
  }

  /* 
      deselectFamily() function takes a family-name string as an argument
      and removes it from the selectedFamilies array in state.
  */
  deselectFamily = family => {
    this.setState({
      ...this.state,
      selectedFamilies: this.state.selectedFamilies.filter(familyName => familyName !== family)
    }, () => console.log(this.state.selectedFamilies))
  }

  /* 
      handleFamilyCheckbox() function conditionally determines whether a
      family should be added to or removed from state based on whether a 
      checkbox has been selected or deselected.
  */
  handleFamilyCheckbox = event => {
    if (event.target.checked) {
      this.selectFamily(event.target.value);
    } else {
      this.deselectFamily(event.target.value);
    }
  }

  /* 
      selectRegion() function takes a region-name string as an argument
      and adds it to the selectedRegions array in state.
  */
  selectRegion = region => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.concat(region)
    }, () => console.log(this.state.selectedRegions))
  }

  /* 
      deselectRegion() function takes a region-name string as an argument
      and removes it from the selectedRegions array in state.
  */
  deselectRegion = region => {
    this.setState({
      ...this.state,
      selectedRegions: this.state.selectedRegions.filter(regionName => regionName !== region)
    }, () => console.log(this.state.selectedRegions))
  }

  /*
      handleRegionCheckbox() function conditionally determines whether a
      region should be added to or removed from state based on whether a 
      checkbox has been selected or deselected.
  */
  handleRegionCheckbox = event => {
    if (event.target.checked) {
      this.selectRegion(event.target.value);
    } else {
      this.deselectRegion(event.target.value);
    }
  }

  /*
  handleFavoritesCheckbox() function conditionally determines whether 
  a favorite bird should be added to or removed from state based on whether
  a checkbox has been selected or deselected.
  */
  handleFavoritesCheckbox = event => {
    if (event.target.checked) {
      this.selectFavorite(event.target.value);
    } else {
      this.deselectFavorite(event.target.value);
    }
  }

  /* 
      selectFavorite() function takes a favorite as an argument
      and adds it to the selectedFavorites array in state.
  */
  selectFavorite = favorite => {
    this.setState({
      ...this.state,
      selectedFavorites: this.state.selectedFavorites.concat(parseInt(favorite))
    }, () => console.log(this.state.selectedFavorites))
  }

  /* 
      deselectFavorite() function takes a favorite as an argument
      and removes it from the selectedFavorites array in state.
  */
  deselectFavorite = favorite => {
    this.setState({
      ...this.state,
      allFavoritesSelected: false,
      selectedFavorites: this.state.selectedFavorites.filter(f => f !== favorite)
    }, () => console.log(this.state.selectedFavorites))
  }

  /*
      selectAllFavorites() function handles the click event when the all favorites
      checkbox is selected, adding/removing all favorites to/from state according
      to whether or not the box is checked.
  */
  selectAllFavorites = event => {
    this.setState({
      ...this.state,
      selectedFavorites: event.target.checked ? this.props.currentUser.bird_ids : [],
      allFavoritesSelected: event.target.checked,
    }, () => console.log(this.state.selectedFavorites))
  }

  /*
      handleSubmit() function filters the bird collection from props according
      to the final user selections, dispatches the action passed in as props, and
      pushes the route determined by a function passed in as props.
  */
  handleSubmit = event => {
    event.preventDefault();

    let filterParams = {
      families: this.state.selectedFamilies,
      regions: this.state.selectedRegions,
      favorites: this.state.selectedFavorites,
    }

    this.setState({
      ...this.state,
      loading: true,
    })

    this.props.fetchBirds(filterParams, this.props.actionType).then(() => {
      this.setState({
        ...this.state,
        loading: false,
      })
      this.props.handleSubmitRoute();
    })

  }

  render() {
    const taxonomicFamilies = ["albatrosses", "anhingas", "auks, murres, puffins", "barn owls", "becards, tityras and allies", "blackbirds and orioles", "boobies and gannets", "bushtits", "cardinals, grosbeaks and buntings", "chachalacas", "chickadees and titmice", "cormorants", "cranes", "creepers", "crows, magpies, jays", "cuckoos, roadrunners, anis", "dippers", "ducks and geese", "falcons", "finches", "frigatebirds", "gnatcatchers", "grebes", "gulls and terns", "hawks and eagles", "herons, egrets, bitterns", "hummingbirds", "ibises and spoonbills", "kingfishers", "kinglets", "larks", "leaf-warblers", "longspurs and snow buntings", "loons", "lovebirds and australasian parrots", "mockingbirds and thrashers", "new world quail", "new world sparrows", "new world vultures", "nightjars", "northern storm-petrels", "nuthatches", "old world flycatchers", "old world sparrows", "olive warblers", "ospreys", "owls", "oystercatchers", "pelicans", "pheasants and grouse", "pigeons and doves", "plovers", "rails, gallinules, coots", "sandpipers", "shearwaters and petrels", "shrikes", "silky-flycatchers", "skuas and jaegers", "southern storm-petrels", "starlings and mynas", "stilts and avocets", "storks", "swallows", "swifts", "sylviid warblers", "thrushes", "trogons", "tropicbirds", "tyrant flycatchers", "verdins", "vireos", "wagtails and pipits", "waxwings", "wood warblers", "woodpeckers", "wrens", "yellow-breasted chats"];
    const regions = ["alaska and the north", "california", "eastern canada", "florida", "great lakes", "mid atlantic", "new england", "northwest", "plains", "rocky mountains", "southeast", "southwest", "texas", "western canada"];

    return (
      <div>
        {/* wait to display filter menus until async request is complete */}
        {this.props.loading ? <h4>loading...</h4> :
          <div id="filter-dropdown">
            <DropdownButton
              bsStyle="warning"
              bsSize="large"
              title="Families"
              id="family-dropdown-menu"
              className="filter-field"
            >
              {taxonomicFamilies.map(family => <Checkbox onChange={this.handleFamilyCheckbox} key={family} value={family}>{toTitleCase(family)}</Checkbox>)}
            </DropdownButton>
            {'  '}
            <DropdownButton
              bsSize="large"
              bsStyle='warning'
              title="Regions"
              id="region-dropdown-menu"
              className="filter-field"
            >
              {regions.map(region => <Checkbox onChange={this.handleRegionCheckbox} key={region} value={region}>{toTitleCase(region)}</Checkbox>)}
            </DropdownButton>
            {'  '}
            {(this.props.currentUser && this.props.currentUser.birds.length > 0) && <DropdownButton
              bsSize="large"
              bsStyle='warning'
              title="Favorites"
              id="favorites-dropdown-menu"
              className="filter-field"
            >
              <Checkbox onChange={this.selectAllFavorites} checked={this.state.selectedFavorites.length === this.props.currentUser.bird_ids.length}>All</Checkbox>
              {this.props.currentUser.birds.map(favorite => <Checkbox onChange={this.handleFavoritesCheckbox} key={favorite.id} value={favorite.id} checked={this.state.selectedFavorites.includes(favorite.id)} disabled={this.state.allFavoritesSelected}>{toTitleCase(favorite.common_name)}</Checkbox>)}
            </DropdownButton>}
            {'  '}
            <Button bsSize="large" className="filter-field" type="submit" onClick={this.handleSubmit}>Go!</Button>
            {this.state.loading && <h4>Loading...</h4>}
          </div>}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds,
    currentUser: state.user.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBirds: (filters, actionType) => dispatch(fetchBirds(filters, actionType)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdsFilter)
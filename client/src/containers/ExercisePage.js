import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import '../index.css';

class ExercisePage extends Component {
  render() {
    const taxonomicFamilies = ["albatrosses", "anhingas", "auks-murres-puffins", "barn-owls", "becards-tityras-and-allies", "blackbirds-and-orioles", "boobies-and-gannets", "bushtits", "cardinals-grosbeaks-and-buntings", "chachalacas", "chickadees-and-titmice", "cormorants", "cranes", "creepers", "crows-magpies-jays", "cuckoos-roadrunners-anis", "dippers", "ducks-and-geese", "falcons", "finches", "frigatebirds", "gnatcatchers", "grebes", "gulls-and-terns", "hawks-and-eagles", "herons-egrets-bitterns", "hummingbirds", "ibises-and-spoonbills", "kingfishers", "kinglets", "larks", "leaf-warblers", "longspurs-and-snow-buntings", "loons", "lovebirds-and-australasian-parrots", "mockingbirds-and-thrashers", "new-world-quail", "new-world-sparrows", "new-world-vultures", "nightjars", "northern-storm-petrels", "nuthatches", "old-world-flycatchers", "old-world-sparrows", "olive-warblers", "ospreys", "owls", "oystercatchers", "pelicans", "pheasants-and-grouse", "pigeons-and-doves", "plovers", "rails-gallinules-coots", "sandpipers", "shearwaters-and-petrels", "shrikes", "silky-flycatchers", "skuas-and-jaegers", "southern-storm-petrels", "starlings-and-mynas", "stilts-and-avocets", "storks", "swallows", "swifts", "sylviid-warblers", "thrushes", "trogons", "tropicbirds", "tyrant-flycatchers", "verdins", "vireos", "wagtails-and-pipits", "waxwings", "wood-warblers", "woodpeckers", "wrens", "yellow-breasted-chats"];
    const regions = ["alaska-and-the-north", "california", "eastern-canada", "florida", "great-lakes", "mid-atlantic", "new-england", "northwest", "plains", "rocky-mountains", "southeast", "southwest", "texas", "western-canada"];
    const familyMenuItems = taxonomicFamilies.map(family => <MenuItem>{family}</MenuItem>)
    const regionMenuItems = regions.map(region => <MenuItem>{region}</MenuItem>)

    return (
      <div>
        <h4>Select which regions and families you would like to test your knowledge of below:</h4>
        <div class="filter-options">
          <ButtonToolbar>
            <DropdownButton title="family">
              {familyMenuItems}
            </DropdownButton>
            <DropdownButton title="region">
              {regionMenuItems}
            </DropdownButton>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { birds: state.birds }
}

export default connect(mapStateToProps)(ExercisePage)
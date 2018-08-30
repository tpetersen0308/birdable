/*
    selectBirdsForBrowse() returns an action with the appropriate type and
    a payload to maintain browse state.
*/
export function selectBirdsForBrowse(birds) {
  return { type: "SELECT_BIRDS_FOR_BROWSE", payload: birds }
}
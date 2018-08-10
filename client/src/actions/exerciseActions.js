export function selectBirds(birds) {
  return { type: "SELECT_BIRDS", payload: birds }
}

export function addExercise(exercise) {
  return { type: "ADD_EXERCISE", payload: exercise }
}

export function addSolution(solution) {
  return { type: "ADD_SOLUTION", payload: solution }
}
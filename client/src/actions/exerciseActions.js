/*
    exerciseActions.js defines functions that return actions with the
    appropriate types and payloads to maintain exercise state.
*/
export function selectBirdsForExercise(birds) {
  return { type: "SELECT_BIRDS_FOR_EXERCISE", payload: birds }
}

export function addProblem(problem) {
  return { type: "ADD_PROBLEM", payload: problem }
}

export function addSolution(solution) {
  return { type: "ADD_SOLUTION", payload: solution }
}

export function addUserAnswer(userAnswer) {
  return { type: "ADD_USER_ANSWER", payload: userAnswer }
}

export function addExerciseType(type) {
  return { type: "ADD_EXERCISE_TYPE", payload: type }
}
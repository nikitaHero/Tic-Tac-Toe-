const actionTypes = {
  SET_STEP: "SET_STEP",
  SET_REMOVED_STEP: "SET_REMOVED_STEP",
  SET_PLAYER_WIN: "SET_PLAYER_WIN"
};

const initialState = {
  gameHistory: [Array(9).fill(null)],
  removedSteps: [],
  playerWins: { x: 0, o: 0 }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STEP:
      return {
        ...state,
        gameHistory: action.payload
      };
    case actionTypes.SET_REMOVED_STEP:
      return {
        ...state,
        removedSteps: action.payload
      };

    case actionTypes.SET_PLAYER_WIN:
      return {
        ...state,
        playerWins: action.payload
      };

    default:
      return state;
  }
};

export const actions = {
  setStep: payload => ({
    type: actionTypes.SET_STEP,
    payload
  }),

  setRemovedStep: payload => ({
    type: actionTypes.SET_REMOVED_STEP,
    payload
  }),

  setPlayerWins: payload => ({
    type: actionTypes.SET_PLAYER_WIN,
    payload
  })
};

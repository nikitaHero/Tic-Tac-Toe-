import { combineReducers } from "redux";
import { reducer as gameData } from "scenes/Game";

const reducer = combineReducers({
  gameData
});

export default reducer;

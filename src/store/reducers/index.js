import { combineReducers } from "redux";

import { selectedAreaReducer } from "./areasReducer";

export default combineReducers({
    selectedArea: selectedAreaReducer
});
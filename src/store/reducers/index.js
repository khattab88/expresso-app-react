import { combineReducers } from "redux";

import { selectedAreaReducer } from "./areasReducer";
import { selectedCountryReducer } from './countriesReducer';

export default combineReducers({
    selectedArea: selectedAreaReducer,
    selectedCountry: selectedCountryReducer
});
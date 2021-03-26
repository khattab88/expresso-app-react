import { combineReducers } from "redux";

import { selectedAreaReducer } from "./areasReducer";
import { selectedCountryReducer } from './countriesReducer';
import { selectedCategoryReducer } from "./categoriesReducer";

export default combineReducers({
    selectedArea: selectedAreaReducer,
    selectedCountry: selectedCountryReducer,
    selectedCategory: selectedCategoryReducer
});
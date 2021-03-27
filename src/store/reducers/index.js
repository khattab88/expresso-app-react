import { combineReducers } from "redux";

import { selectedAreaReducer } from "./areasReducer";
import { selectedCountryReducer } from './countriesReducer';
import { selectedCategoryReducer } from "./categoriesReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
    selectedArea: selectedAreaReducer,
    selectedCountry: selectedCountryReducer,
    selectedCategory: selectedCategoryReducer,
    cart: cartReducer
});
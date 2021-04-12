import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { selectedAreaReducer } from "./areasReducer";
import { selectedCountryReducer } from './countriesReducer';
import { selectedCategoryReducer } from "./categoriesReducer";
import { selectedBranchReducer } from './branchesReducer';
import { cartReducer } from "./cartReducer";
import { addressesReducer } from './addressesReducer';

export default combineReducers({
    auth: authReducer,
    selectedArea: selectedAreaReducer,
    selectedCountry: selectedCountryReducer,
    selectedCategory: selectedCategoryReducer,
    selectedBranch: selectedBranchReducer,
    cart: cartReducer,
    addresses: addressesReducer
});

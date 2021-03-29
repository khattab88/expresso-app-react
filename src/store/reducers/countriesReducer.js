import * as actionTypes from '../actions/actionTypes';
import state from "../state";

export const selectedCountryReducer = (selectedCountry = state.selectedCountry, action) => {
    switch (action.type) {
        case actionTypes.COUNTRIES_SELECT_COUNTRY:
            return action.payload;
        default:
            return selectedCountry;
    }
}